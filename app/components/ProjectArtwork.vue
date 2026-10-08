<script setup lang="ts">
const props = withDefaults(defineProps<{ kind: 'ai' | 'iot'; compact?: boolean }>(), { compact: false })
</script>
<template>
  <div class="artwork" :class="[`artwork-${kind}`, { 'artwork-compact': compact }]">
    <div class="artwork-grid" aria-hidden="true"></div>
    <template v-if="kind === 'ai'">
      <div class="voice-orbit voice-orbit-outer" aria-hidden="true"></div>
      <div class="voice-orbit voice-orbit-inner" aria-hidden="true"></div>
      <div class="voice-core" aria-hidden="true"><div class="voice-core-ring"></div><span class="voice-core-glow"></span></div>
      <div class="voice-wave voice-wave-left" aria-hidden="true"><i v-for="n in 19" :key="n" :style="{ '--i': n }"></i></div>
      <div class="voice-wave voice-wave-right" aria-hidden="true"><i v-for="n in 19" :key="n" :style="{ '--i': n }"></i></div>
      <div class="artwork-corner artwork-top"><span class="live-dot"></span> VOICE / ONLINE</div>
      <div class="artwork-corner artwork-bottom">01:24 <span>•</span> SESSION ACTIVE</div>
      <div class="voice-tag">INTELLIGENT AUDIO INTERFACE</div>
    </template>
    <template v-else>
      <svg class="map-viz" viewBox="0 0 900 560" role="img" aria-label="Illustrated journey route on an abstract dark map">
        <defs>
          <linearGradient id="trail-line" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#70e6bb"/><stop offset=".55" stop-color="#5abbee"/><stop offset="1" stop-color="#a2b8ff"/></linearGradient>
          <filter id="trail-glow"><feGaussianBlur stdDeviation="5" /></filter>
        </defs>
        <g fill="none" stroke="#284044" stroke-width="2" opacity=".8">
          <path d="M-50 88L970 390M-40 200L930 510M30 -40L430 620M260 -80L720 620M570 -80L860 620M-10 400L930 40" />
          <path d="M-30 260L920 100M-60 460L940 300M120 620L530 -40M340 620L780 -40" stroke-width="1"/>
        </g>
        <g fill="#112d2b" stroke="#23463f" opacity=".7">
          <path d="M90 100L220 80L295 156L207 240L80 220Z"/>
          <path d="M630 310L800 290L845 415L680 460L600 390Z"/>
          <path d="M380 30L490 12L538 100L478 180L350 130Z"/>
        </g>
        <path d="M165 385C227 328 212 268 300 281S388 385 458 292S530 160 611 211S723 280 746 135" fill="none" stroke="#55d7ba" stroke-width="16" opacity=".28" filter="url(#trail-glow)"/>
        <path d="M165 385C227 328 212 268 300 281S388 385 458 292S530 160 611 211S723 280 746 135" fill="none" stroke="url(#trail-line)" stroke-width="5" stroke-linecap="round" stroke-dasharray="1 0"/>
        <circle cx="165" cy="385" r="11" fill="#081714" stroke="#66e5ad" stroke-width="5"/><circle cx="746" cy="135" r="13" fill="#67dece" stroke="#fff" stroke-width="4"/>
        <circle cx="458" cy="292" r="7" fill="#7cebd6" stroke="#0b2523" stroke-width="4"/>
        <rect x="552" y="93" width="166" height="50" rx="11" fill="#0a1d1b" stroke="#2c675c"/><text x="570" y="113" fill="#75e9c5" font-size="11" font-weight="600">LATEST LOCATION</text><text x="570" y="131" fill="#e1fff3" font-size="11">Journey in progress</text>
      </svg>
      <div class="artwork-corner artwork-top"><span class="live-dot teal"></span> JOURNEY / TRACKING</div>
      <div class="map-card"><span class="map-card-label">DISTANCE COVERED</span><strong>— <span>km</span></strong><span>Prototype data pending</span></div>
      <div class="artwork-corner artwork-bottom">MAP / TIMELINE</div>
    </template>
  </div>
</template>
