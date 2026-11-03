type CardEffect = 'meta' | 'cci' | 'mobility' | 'v2' | 'thesis' | 'collate' | 'workflow' | 'talis';

const reducedQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
const pointerQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
const cards = [...document.querySelectorAll<HTMLElement>('[data-fx]')];
const controller = new AbortController();
const { signal } = controller;
const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));
const canTrackPointer = () => pointerQuery.matches && !reducedQuery.matches;

type PhaseState = { current: number; target: number; frame: number | null };
const phases = new WeakMap<HTMLElement, PhaseState>();

const setSettling = (card: HTMLElement) => {
  if (!canTrackPointer()) return;
  card.classList.remove('is-settling');
  void card.offsetWidth;
  card.classList.add('is-settling');
};

const resetCard = (card: HTMLElement) => {
  card.classList.remove('is-settling', 'is-active', 'is-focused');
  card.style.removeProperty('--meta-fold');
  card.style.removeProperty('--meta-ridge-shift');
  card.style.removeProperty('--v2-window-shift');
  card.style.removeProperty('--collate-spread');
  card.style.removeProperty('--talis-highlight');
  const phase = phases.get(card);
  if (phase?.frame !== null && phase?.frame !== undefined) cancelAnimationFrame(phase.frame);
  phases.delete(card);
  card.querySelector<SVGElement>('[data-v2-window]')?.style.removeProperty('transform');
  card.querySelector<SVGElement>('[data-v2-window-mark]')?.style.removeProperty('transform');
};

const setPointerState = (card: HTMLElement, active: boolean) => {
  if (!canTrackPointer()) return;
  card.classList.toggle('is-active', active);
  if (!active) resetCard(card);
};

const pointerPosition = (cover: HTMLElement, event: PointerEvent) => {
  const rect = cover.getBoundingClientRect();
  if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) return null;
  return {
    x: clamp((event.clientX - rect.left) / rect.width, 0, 1),
    y: clamp((event.clientY - rect.top) / rect.height, 0, 1),
  };
};

const updateMeta = (card: HTMLElement, x: number) => {
  card.style.setProperty('--meta-fold', `${(x - 0.5) * 16}`);
  card.style.setProperty('--meta-ridge-shift', `${(x - 0.5) * 10}`);
};

const updateV2 = (card: HTMLElement, x: number) => {
  const shift = (x - 0.5) * 190;
  card.style.setProperty('--v2-window-shift', `${shift}px`);
};

const renderPhase = (card: HTMLElement, state: PhaseState) => {
  state.current += (state.target - state.current) * 0.12;
  card.style.setProperty('--thesis-phase', `${state.current}px`);
  if (Math.abs(state.target - state.current) < 0.05 || !card.classList.contains('is-active')) {
    state.current = state.target;
    card.style.setProperty('--thesis-phase', `${state.target}px`);
    state.frame = null;
    return;
  }
  state.frame = requestAnimationFrame(() => renderPhase(card, state));
};

const updateThesis = (card: HTMLElement, x: number) => {
  const state = phases.get(card) ?? { current: 22, target: 22, frame: null };
  state.target = 30 - x * 16;
  phases.set(card, state);
  if (state.frame === null) state.frame = requestAnimationFrame(() => renderPhase(card, state));
};

const updateCollate = (card: HTMLElement, x: number) => {
  card.style.setProperty('--collate-spread', `${(x - 0.5) * 16}`);
};

const updateTalis = (card: HTMLElement, x: number) => {
  card.style.setProperty('--talis-highlight', `${(x - 0.5) * 54}px`);
};

const updateEffect = (card: HTMLElement, cover: HTMLElement, effect: CardEffect, event: PointerEvent) => {
  if (event.pointerType === 'touch' || !canTrackPointer()) return;
  const position = pointerPosition(cover, event);
  if (!position) return;
  if (effect === 'meta') updateMeta(card, position.x);
  if (effect === 'v2') updateV2(card, position.x);
  if (effect === 'thesis') updateThesis(card, position.x);
  if (effect === 'collate') updateCollate(card, position.x);
  if (effect === 'talis') updateTalis(card, position.x);
};

const resetRepresentative = (card: HTMLElement, effect: CardEffect) => {
  card.style.removeProperty('--meta-fold');
  card.style.removeProperty('--meta-ridge-shift');
  card.style.removeProperty('--v2-window-shift');
  card.style.removeProperty('--collate-spread');
  card.style.removeProperty('--talis-highlight');
  card.style.setProperty('--thesis-phase', '22px');
  if (effect === 'thesis') {
    const state = { current: 22, target: 22, frame: null };
    phases.set(card, state);
  }
};

cards.forEach((card) => {
  const effect = card.dataset.fx as CardEffect | undefined;
  const cover = card.querySelector<HTMLElement>('[data-cover]');
  if (!effect || !cover) return;

  cover.addEventListener('pointerenter', (event) => {
    if ((event as PointerEvent).pointerType === 'touch' || !canTrackPointer()) return;
    setSettling(card);
    card.classList.add('is-active');
    updateEffect(card, cover, effect, event as PointerEvent);
  }, { signal });
  cover.addEventListener('pointermove', (event) => updateEffect(card, cover, effect, event), { signal });
  cover.addEventListener('pointerleave', () => {
    resetCard(card);
    resetRepresentative(card, effect);
  }, { signal });
  card.addEventListener('focusin', () => {
    card.classList.add('is-focused');
    resetRepresentative(card, effect);
    if (!reducedQuery.matches) setSettling(card);
  }, { signal });
  card.addEventListener('focusout', () => {
    card.classList.remove('is-focused');
    if (!card.matches(':hover')) {
      resetCard(card);
      resetRepresentative(card, effect);
    }
  }, { signal });
});

window.addEventListener('astro:before-swap', () => controller.abort(), { signal });
