import type { Locale } from './site'

export type Project = {
  slug: 'ai-voice-agent' | 'lifetrail'
  kind: 'ai' | 'iot'
  status: 'building' | 'prototype'
  tools: string[]
  copy: Record<Locale, {
    name: string
    eyebrow: string
    tagline: string
    excerpt: string
    overview: string
    problem: string
    approach: string
    features: { title: string; description: string }[]
    roadmap: { title: string; description: string; state: 'now' | 'next' | 'later' }[]
  }>
}

export const projects: Project[] = [
  {
    slug: 'ai-voice-agent', kind: 'ai', status: 'building',
    tools: ['Rust', 'WebSocket', 'LLM', 'ASR / TTS', 'MCP', 'ESP32', 'Vue'],
    copy: {
      en: {
        name: 'AI Voice Agent', eyebrow: '01 / ARTIFICIAL INTELLIGENCE',
        tagline: 'Give intelligent software a voice.',
        excerpt: 'An extensible, voice-first AI platform connecting natural conversations, agent capabilities, and smart hardware.',
        overview: 'A modular voice-agent system built around a Rust server, real-time audio, language models and connected devices. The goal is a dependable foundation for assistants that can listen, think, speak and interact with the physical world.',
        problem: 'Useful AI should be accessible beyond a chat window. Voice interfaces need low-latency audio, predictable session behavior, flexible providers and safe device interactions.',
        approach: 'Develop a composable system with dedicated voice processing, agent orchestration, configurable templates and tool integrations; pair it with ESP32 clients and a management interface.',
        features: [
          { title: 'Real-time voice', description: 'Streaming speech input and output with structured session management.' },
          { title: 'AI orchestration', description: 'LLM conversations with template and provider selection.' },
          { title: 'Tool ecosystem', description: 'Device capabilities and external MCP integrations.' },
          { title: 'Connected hardware', description: 'ESP32-based endpoints for physical-world experiences.' },
        ],
        roadmap: [
          { title: 'Voice foundations', description: 'Server, audio transport and voice pipeline.', state: 'now' },
          { title: 'Experience and reliability', description: 'Streamlining operations, enrollment and observability.', state: 'next' },
          { title: 'Product ecosystem', description: 'Reusable agent experiences across more devices.', state: 'later' },
        ]
      },
      vi: {
        name: 'AI Voice Agent', eyebrow: '01 / TRÍ TUỆ NHÂN TẠO',
        tagline: 'Đưa giọng nói vào phần mềm thông minh.',
        excerpt: 'Nền tảng AI Agent tương tác bằng giọng nói, kết nối hội thoại tự nhiên, công cụ và thiết bị thông minh.',
        overview: 'Hệ thống voice agent theo kiến trúc module với Rust server, âm thanh thời gian thực, mô hình ngôn ngữ và thiết bị kết nối. Mục tiêu là xây dựng nền tảng cho trợ lý có thể nghe, suy luận, phản hồi và tương tác với thế giới thực.',
        problem: 'AI hữu ích cần vượt khỏi khung chat. Giao diện giọng nói đòi hỏi độ trễ thấp, quản lý phiên ổn định, khả năng thay đổi provider và tương tác thiết bị an toàn.',
        approach: 'Xây dựng hệ thống gồm xử lý tiếng nói, điều phối agent, template, provider và tool; kết nối thiết bị ESP32 với giao diện web quản lý.',
        features: [
          { title: 'Giọng nói thời gian thực', description: 'Streaming âm thanh đầu vào/ra và quản lý trạng thái phiên.' },
          { title: 'Điều phối AI', description: 'Hội thoại LLM với template và provider linh hoạt.' },
          { title: 'Hệ sinh thái tool', description: 'Công cụ trên thiết bị và tích hợp MCP bên ngoài.' },
          { title: 'Thiết bị kết nối', description: 'Các thiết bị ESP32 mang AI ra môi trường thực tế.' },
        ],
        roadmap: [
          { title: 'Nền tảng voice', description: 'Server, truyền âm thanh và voice pipeline.', state: 'now' },
          { title: 'Trải nghiệm và độ ổn định', description: 'Tối ưu vận hành, enrollment và giám sát.', state: 'next' },
          { title: 'Hệ sinh thái sản phẩm', description: 'Tái sử dụng agent trên nhiều loại thiết bị.', state: 'later' },
        ]
      }
    }
  },
  {
    slug: 'lifetrail', kind: 'iot', status: 'prototype',
    tools: ['ESP32', 'NEO-6M GPS', 'Wi-Fi Sync', 'Maps', 'Timeline'],
    copy: {
      en: {
        name: 'LifeTrail', eyebrow: '02 / CONNECTED EXPERIENCES',
        tagline: 'Every journey has a story.',
        excerpt: 'A personal location and memory platform combining GPS journeys, interactive maps and, eventually, the moments captured along the way.',
        overview: 'LifeTrail is a connected hardware and software concept for preserving personal journeys. An ESP32-based GPS device records movement and syncs when a network becomes available. The longer-term vision connects routes with photos, audio and memorable places.',
        problem: 'A route is more than dots on a map. Existing location data can be fragmented or disconnected from the context and memories that make a journey meaningful.',
        approach: 'Start with a simple GPS device, local logging and Wi-Fi synchronization. Build map visualization and stop analysis before introducing multimedia timelines.',
        features: [
          { title: 'GPS journey capture', description: 'Location recording with ESP32 and a GPS module.' },
          { title: 'Offline-first mindset', description: 'Record first, synchronize when connectivity is available.' },
          { title: 'Maps and stops', description: 'Planned route visualization and dwell-time insights.' },
          { title: 'Multimedia timeline', description: 'Future associations between places, photos and audio.' },
        ],
        roadmap: [
          { title: 'Phase 1 · GPS', description: 'Prototype location capture and Wi-Fi synchronization.', state: 'now' },
          { title: 'Phase 2 · Maps', description: 'Route history and stop-time visualization.', state: 'next' },
          { title: 'Phase 3 · Memories', description: 'Photos, audio and a place-aware timeline.', state: 'later' },
        ]
      },
      vi: {
        name: 'LifeTrail', eyebrow: '02 / TRẢI NGHIỆM KẾT NỐI',
        tagline: 'Mỗi hành trình đều có câu chuyện.',
        excerpt: 'Nền tảng lưu giữ hành trình cá nhân kết hợp GPS, bản đồ tương tác và trong tương lai là những khoảnh khắc trên đường đi.',
        overview: 'LifeTrail là ý tưởng kết hợp phần cứng và phần mềm nhằm lưu giữ hành trình cá nhân. Thiết bị GPS dựa trên ESP32 ghi lại đường đi và đồng bộ khi có mạng. Về dài hạn, sản phẩm liên kết tuyến đường với ảnh, âm thanh và các địa điểm đáng nhớ.',
        problem: 'Một hành trình không chỉ là những điểm tọa độ. Dữ liệu vị trí thường rời rạc và thiếu bối cảnh hoặc ký ức khiến hành trình trở nên ý nghĩa.',
        approach: 'Bắt đầu bằng thiết bị GPS đơn giản, lưu trữ cục bộ và đồng bộ Wi-Fi. Tiếp theo là bản đồ, thống kê điểm dừng và cuối cùng là timeline đa phương tiện.',
        features: [
          { title: 'Ghi lại hành trình GPS', description: 'Lưu vị trí bằng ESP32 kết hợp module GPS.' },
          { title: 'Ưu tiên ngoại tuyến', description: 'Ghi dữ liệu trước, đồng bộ khi có kết nối.' },
          { title: 'Bản đồ và điểm dừng', description: 'Dự kiến hiển thị đường đi và thời gian dừng.' },
          { title: 'Timeline đa phương tiện', description: 'Định hướng kết hợp vị trí, hình ảnh và âm thanh.' },
        ],
        roadmap: [
          { title: 'Giai đoạn 1 · GPS', description: 'Prototype ghi nhận vị trí và đồng bộ Wi-Fi.', state: 'now' },
          { title: 'Giai đoạn 2 · Bản đồ', description: 'Lịch sử tuyến đường và thống kê điểm dừng.', state: 'next' },
          { title: 'Giai đoạn 3 · Ký ức', description: 'Hình ảnh, âm thanh và timeline theo vị trí.', state: 'later' },
        ]
      }
    }
  }
]

export const findProject = (slug: string) => projects.find((p) => p.slug === slug)
export const statusLabel = (status: Project['status'], locale: Locale) => {
  if (status === 'prototype') return locale === 'vi' ? 'Nguyên mẫu' : 'Prototype'
  return locale === 'vi' ? 'Đang phát triển' : 'In development'
}
