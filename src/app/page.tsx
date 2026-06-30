import {
  BadgeCheck,
  Bot,
  CheckCircle2,
  Code2,
  DatabaseZap,
  ExternalLink,
  Globe2,
  KeyRound,
  MessageCircle,
  Rocket,
  SearchCode,
  ServerCog,
  ShieldCheck,
  TerminalSquare,
  WandSparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { BlurReveal } from "@/components/blur-reveal";
import { HeroVisual } from "@/components/hero-visual";
import { Marquee } from "@/components/marquee";
import { TiltCard } from "@/components/tilt-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const services = [
  {
    title: "Сайты и лендинги",
    description:
      "Современные страницы для услуг, портфолио, Kwork-предложений и небольших бизнесов.",
    bestFor: "эксперты, фрилансеры, сервисные бизнесы, запуск новой услуги",
    includes: ["структура страницы", "адаптивная верстка", "CTA и блоки доверия"],
    result: "Клиент быстро понимает предложение и видит, как связаться.",
    tech: ["Next.js", "Tailwind", "shadcn/ui"],
    icon: Globe2,
  },
  {
    title: "Telegram-боты",
    description:
      "Боты для заявок, уведомлений, воронок, простых кабинетов и внутренних процессов.",
    bestFor: "Kwork-заказы, магазины, администраторы, команды поддержки",
    includes: ["сценарии", "команды", "интеграции", "админ-логика"],
    result: "Рутинные действия переходят в понятный Telegram-процесс.",
    tech: ["Telegram API", "Node.js", "Webhooks"],
    icon: Bot,
  },
  {
    title: "Backend API",
    description:
      "API для сайтов, ботов, админок и интеграций с чистой логикой и понятными endpoints.",
    bestFor: "MVP, внутренние сервисы, интеграции, формы заявок",
    includes: ["REST endpoints", "валидация", "работа с данными", "документация"],
    result: "Фронтенд и внешние сервисы получают стабильную серверную основу.",
    tech: ["Node.js", "REST", "PostgreSQL"],
    icon: ServerCog,
  },
  {
    title: "Парсеры и автоматизация",
    description:
      "Парсеры, CSV-обработка, выгрузки, скрипты и автоматизация повторяющихся задач.",
    bestFor: "таблицы, каталоги, отчеты, ручные операции",
    includes: ["сбор данных", "очистка", "CSV/JSON", "автоматический запуск"],
    result: "Меньше ручной работы и больше аккуратных данных для бизнеса.",
    tech: ["Playwright", "CSV", "Automation"],
    icon: SearchCode,
  },
  {
    title: "AI-сервисы",
    description:
      "AI-сервисы, LLM-workflows, генерация текстов, классификация и ассистенты для процессов.",
    bestFor: "контент, поддержка, анализ, внутренние AI-инструменты",
    includes: ["prompt-flow", "API-интеграция", "структурированный вывод", "UX"],
    result: "AI становится рабочим инструментом, а не хаотичным экспериментом.",
    tech: ["LLM", "OpenAI", "Automation"],
    icon: WandSparkles,
  },
  {
    title: "Деплой и проверка безопасности",
    description:
      "Деплой на сервер, базовая проверка сайта, конфигурация и рекомендации перед запуском.",
    bestFor: "готовые сайты, MVP, боты, API перед публикацией",
    includes: ["server setup", "env", "build check", "basic security review"],
    result: "Проект можно запускать спокойнее: понятный деплой и меньше очевидных рисков.",
    tech: ["Linux", "Nginx", "Vercel"],
    icon: ShieldCheck,
  },
];

const projects = [
  {
    title: "CRYPTOGRAPHER",
    problem:
      "Сложную тему шифрования нужно было показать так, чтобы она выглядела понятно и надежно.",
    built:
      "Технологичный интерфейс с акцентом на сценарии, структуру данных и визуальную ясность.",
    result:
      "Проект воспринимается как аккуратный security-инструмент, а не как абстрактная демо-страница.",
    stack: ["Web", "UI", "Security"],
    status: "Интерфейс безопасности",
  },
  {
    title: "Store Order Management System",
    problem:
      "Заказы, статусы и ручные операции легко теряются без единой логики управления.",
    built:
      "Backend-основа для заказов, статусов, таблиц и дальнейшего админ-интерфейса.",
    result:
      "Команда получает понятный рабочий процесс и меньше ошибок при обработке заявок.",
    stack: ["Backend API", "Заказы", "Админка"],
    status: "Бизнес-система",
  },
  {
    title: "Telegram Bot Template",
    problem:
      "Боты часто начинаются быстро, но без структуры становятся сложными в поддержке.",
    built:
      "Шаблон с командами, обработчиками, понятными сценариями и местом для интеграций.",
    result:
      "Новый Telegram-бот можно запускать быстрее и расширять без хаоса в коде.",
    stack: ["Telegram", "Node.js", "Template"],
    status: "Основа бота",
  },
  {
    title: "Parser / CSV Automation",
    problem:
      "Данные приходят из разных источников, а ручная подготовка таблиц забирает время.",
    built:
      "Скрипт сбора, очистки и экспорта данных в удобный CSV/JSON-формат.",
    result:
      "Повторяющаяся работа превращается в предсказуемую автоматизацию с чистым результатом.",
    stack: ["Парсер", "CSV", "Автоматизация"],
    status: "Поток данных",
  },
  {
    title: "MyProfile Portfolio Website",
    problem:
      "Личный сайт должен сразу объяснять услуги и помогать клиенту сделать следующий шаг.",
    built:
      "Темное premium-портфолио с услугами, кейсами, доверием и CTA для Kwork-клиентов.",
    result:
      "Сайт работает как витрина навыков и как понятная точка входа для заказа.",
    stack: ["Next.js", "shadcn/ui", "Portfolio"],
    status: "Текущий сайт",
  },
];

const frontendStack = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "shadcn/ui",
  "Spell UI",
  "Motion",
  "lucide-react",
];

const backendAutomationStack = [
  "Python",
  "FastAPI",
  "Telegram Bot API",
  "PostgreSQL",
  "SQLite",
  "Docker",
  "Linux",
  "Git",
  "AI APIs",
  "Парсеры",
  "Деплой",
  "Security Review",
];

const trustPoints = [
  "адаптивная мобильная верстка",
  "чистая структура кода",
  "build-проверка перед передачей",
  "готовность к деплою",
  "понятная коммуникация",
  "AI-инструменты используются профессионально",
];

const process = [
  {
    title: "Бриф",
    description: "Фиксируем задачу, аудиторию, примеры, технические ограничения и результат.",
  },
  {
    title: "Архитектура",
    description: "Продумываю структуру интерфейса, backend-логику, данные или сценарий бота.",
  },
  {
    title: "Разработка",
    description: "Собираю проект в понятных компонентах, API, скриптах или workflow.",
  },
  {
    title: "Проверка и деплой",
    description: "Проверяю мобильную версию, build, базовые риски и готовность к запуску.",
  },
];

const launchSignals: { icon: LucideIcon; label: string }[] = [
  { icon: Rocket, label: "проект готовится к деплою" },
  { icon: DatabaseZap, label: "backend, парсеры и потоки данных" },
  { icon: KeyRound, label: "базовая проверка безопасности сайта" },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#050712] text-white">
      <section className="relative isolate border-b border-white/10">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_6%,rgba(59,130,246,0.28),transparent_30%),radial-gradient(circle_at_78%_15%,rgba(124,58,237,0.22),transparent_24%),linear-gradient(180deg,#111827_0%,#050712_68%)]" />
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-14 px-5 py-6 sm:px-8 lg:px-10">
          <header className="flex items-center justify-end gap-4 md:justify-between">
            <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
              <a className="transition hover:text-white" href="#services">
                Услуги
              </a>
              <a className="transition hover:text-white" href="#projects">
                Проекты
              </a>
              <a className="transition hover:text-white" href="#trust">
                Доверие
              </a>
              <a className="transition hover:text-white" href="#contact">
                Контакты
              </a>
            </nav>
          </header>

          <div
            id="top"
            className="grid items-center gap-10 pb-14 pt-6 md:grid-cols-[1.04fr_0.96fr] lg:pb-20"
          >
            <div className="flex flex-col gap-7">
              <div className="flex flex-col gap-5">
                <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-normal text-white sm:text-5xl">
                  Создаю сайты, Telegram-ботов и AI-автоматизацию для бизнеса
                </h1>
                <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                  Разрабатываю современные веб-интерфейсы, backend API,
                  парсеры, ботов и AI-сервисы — от идеи и дизайна до деплоя на
                  сервер.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="bg-blue-500 text-white shadow-lg shadow-blue-500/20 hover:bg-blue-400"
                >
                  <a href="#contact">
                    Обсудить проект
                    <MessageCircle data-icon="inline-end" />
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/15 bg-white/5 text-white hover:bg-white/10"
                >
                  <a href="#services">Посмотреть услуги</a>
                </Button>
              </div>

            </div>

            <HeroVisual />
          </div>
        </div>
      </section>

      <section
        aria-label="Стек технологий"
        className="border-b border-white/10 bg-[#050712] py-14 sm:py-16"
      >
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-7 px-5 sm:px-8 lg:px-10">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-blue-300">
              Стек технологий
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-normal text-white sm:text-4xl">
              Инструменты, с которыми я собираю сайты, ботов, backend и AI-автоматизацию.
            </h2>
          </div>

          <div className="relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.05] py-8 shadow-2xl shadow-blue-950/20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(96,165,250,0.16),transparent_30%),radial-gradient(circle_at_78%_80%,rgba(139,92,246,0.12),transparent_32%)]" />
            <div className="relative flex flex-col gap-4">
              <Marquee
                duration={44}
                pauseOnHover
                fadeAmount={8}
                className="px-3"
              >
                {frontendStack.map((technology) => (
                  <div key={technology} className="px-2">
                    <Badge className="min-w-36 justify-center rounded-lg border-blue-300/20 bg-blue-400/10 px-5 py-3 text-base font-medium text-blue-50 shadow-lg shadow-blue-950/20 transition hover:border-blue-200/40 hover:bg-blue-400/15 sm:min-w-44">
                      {technology}
                    </Badge>
                  </div>
                ))}
              </Marquee>

              <Marquee
                duration={52}
                pauseOnHover
                direction="right"
                fadeAmount={8}
                className="px-3"
              >
                {backendAutomationStack.map((technology) => (
                  <div key={technology} className="px-2">
                    <Badge className="min-w-36 justify-center rounded-lg border-violet-300/20 bg-white/[0.06] px-5 py-3 text-base font-medium text-slate-100 shadow-lg shadow-violet-950/15 transition hover:border-violet-200/35 hover:bg-white/[0.085] sm:min-w-44">
                      {technology}
                    </Badge>
                  </div>
                ))}
              </Marquee>
            </div>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 lg:px-10"
      >
        <div className="mb-8 flex max-w-3xl flex-col gap-3">
          <p className="text-sm font-medium text-blue-300">Услуги</p>
          <h2 className="text-3xl font-semibold tracking-normal text-white sm:text-4xl">
            Разработка, автоматизация и запуск без лишней сложности.
          </h2>
          <p className="leading-7 text-slate-400">
            Для Kwork-клиентов важно быстро понять результат. Поэтому каждая
            услуга описана через задачу, состав работы и пользу для бизнеса.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {services.map((service) => (
            <Card
              key={service.title}
              className="border-white/10 bg-white/[0.045] text-white transition hover:-translate-y-1 hover:bg-white/[0.075]"
            >
              <CardHeader>
                <service.icon className="size-5 text-blue-300" />
                <CardTitle className="text-xl text-white">
                  {service.title}
                </CardTitle>
                <CardDescription className="leading-7 text-slate-400">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <div className="rounded-lg border border-white/10 bg-black/20 p-3 text-sm leading-6 text-slate-300">
                  <span className="text-slate-500">Подходит для: </span>
                  {service.bestFor}
                </div>
                <div className="grid gap-2">
                  {service.includes.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 text-sm text-slate-300"
                    >
                      <CheckCircle2 className="size-4 shrink-0 text-blue-300" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <Separator className="bg-white/10" />
                <p className="text-sm leading-6 text-slate-300">
                  <span className="text-slate-500">Результат: </span>
                  {service.result}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.tech.map((tag) => (
                    <Badge
                      key={tag}
                      className="border-white/10 bg-white/5 text-slate-200 hover:bg-white/5"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section
        id="projects"
        className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 lg:px-10"
      >
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="flex max-w-2xl flex-col gap-3">
            <p className="text-sm font-medium text-blue-300">Проекты</p>
            <h2 className="text-3xl font-semibold tracking-normal text-white sm:text-4xl">
              Примеры направлений, с которыми я работаю.
            </h2>
          </div>
          <p className="max-w-md leading-7 text-slate-400">
            Разные типы задач: от сайтов и портфолио до backend-логики, ботов и
            автоматизации данных.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {projects.map((project) => (
            <TiltCard
              key={project.title}
              tiltLimit={4}
              scale={1.015}
              className="rounded-xl"
            >
              <Card className="h-full border-white/10 bg-white/[0.045] text-white">
                <CardHeader>
                  <div className="mb-4 overflow-hidden rounded-lg border border-white/10 bg-[#07101e]">
                    <div className="h-40 bg-[linear-gradient(135deg,rgba(37,99,235,0.28),rgba(15,23,42,0.35)),radial-gradient(circle_at_70%_25%,rgba(147,197,253,0.22),transparent_28%)] p-4">
                      <div className="mb-4 flex items-center justify-between gap-3">
                        <div className="flex gap-1.5">
                          <span className="size-2 rounded-full bg-red-400/70" />
                          <span className="size-2 rounded-full bg-amber-300/70" />
                          <span className="size-2 rounded-full bg-emerald-400/70" />
                        </div>
                        <div className="rounded-md border border-white/10 bg-black/25 px-3 py-1.5 text-xs text-slate-200 backdrop-blur">
                          {project.status}
                        </div>
                      </div>
                      <div className="grid gap-2">
                        <div className="h-3 w-2/3 rounded-full bg-white/30" />
                        <div className="h-3 w-1/2 rounded-full bg-white/15" />
                        <div className="mt-3 grid grid-cols-3 gap-2">
                          <div className="h-12 rounded-md border border-white/10 bg-black/25" />
                          <div className="h-12 rounded-md border border-white/10 bg-black/25" />
                          <div className="h-12 rounded-md border border-white/10 bg-black/25" />
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between gap-3 border-t border-white/10 px-4 py-3">
                      <div className="text-xs text-slate-500">макет кейса</div>
                      <div className="flex gap-1">
                        <span className="size-1.5 rounded-full bg-blue-300/80" />
                        <span className="size-1.5 rounded-full bg-violet-300/70" />
                        <span className="size-1.5 rounded-full bg-slate-500" />
                      </div>
                    </div>
                  </div>
                  <div className="mb-2">
                    <Badge className="border-blue-300/15 bg-blue-400/10 text-blue-100 hover:bg-blue-400/10">
                      {project.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-white">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-4">
                  <div className="grid gap-3 text-sm leading-6 text-slate-300">
                    <p>
                      <span className="text-slate-500">Задача: </span>
                      {project.problem}
                    </p>
                    <p>
                      <span className="text-slate-500">Сделано: </span>
                      {project.built}
                    </p>
                    <p>
                      <span className="text-slate-500">Результат: </span>
                      {project.result}
                    </p>
                  </div>
                  <Separator className="bg-white/10" />
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tag) => (
                      <Badge
                        key={tag}
                        className="border-white/10 bg-white/5 text-slate-200 hover:bg-white/5"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button
                    disabled
                    size="sm"
                    variant="outline"
                    className="w-fit border-white/10 bg-white/5 text-slate-400"
                  >
                    Публичная ссылка не указана
                  </Button>
                </CardContent>
              </Card>
            </TiltCard>
          ))}
        </div>
      </section>

      <section
        id="trust"
        className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 lg:px-10"
      >
        <div className="grid gap-8 md:grid-cols-[0.82fr_1.18fr]">
          <div className="flex flex-col gap-4">
            <p className="text-sm font-medium text-blue-300">Доверие</p>
            <h2 className="text-3xl font-semibold tracking-normal sm:text-4xl">
              Что помогает спокойно заказать проект.
            </h2>
            <p className="leading-7 text-slate-400">
              Я стараюсь делать не просто красивую страницу, а понятный рабочий
              результат: структура, проверка, готовность к запуску и честная
              коммуникация.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {trustPoints.map((point) => (
              <div
                key={point}
                className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.04] p-4 text-sm text-slate-300"
              >
                <BadgeCheck className="size-4 shrink-0 text-blue-300" />
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="process"
        className="mx-auto grid w-full max-w-6xl gap-8 px-5 py-16 sm:px-8 md:grid-cols-[0.8fr_1.2fr] lg:px-10"
      >
        <div className="flex flex-col gap-4">
          <p className="text-sm font-medium text-blue-300">Процесс</p>
          <h2 className="text-3xl font-semibold tracking-normal sm:text-4xl">
            От задачи к работающему результату.
          </h2>
          <p className="leading-7 text-slate-400">
            Процесс зависит от типа проекта, но общий принцип один: быстро
            зафиксировать результат, собрать основу и проверить перед передачей.
          </p>
        </div>
        <div className="relative grid gap-3">
          <div className="absolute bottom-6 left-5 top-6 hidden w-px bg-gradient-to-b from-blue-300/50 via-white/10 to-violet-300/40 sm:block" />
          {process.map((step, index) => (
            <div
              key={step.title}
              className="relative grid gap-3 rounded-lg border border-white/10 bg-white/[0.04] p-4 sm:grid-cols-[auto_1fr]"
            >
              <div className="flex size-10 items-center justify-center rounded-lg bg-blue-500/15 text-sm font-semibold text-blue-200">
                {index + 1}
              </div>
              <div>
                <div className="font-medium text-slate-100">{step.title}</div>
                <p className="mt-1 text-sm leading-6 text-slate-400">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="grid gap-4 md:grid-cols-3">
          {launchSignals.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.035] p-4 text-sm text-slate-300"
            >
              <Icon className="size-5 shrink-0 text-blue-300" />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="mx-auto w-full max-w-6xl px-5 pb-20 sm:px-8 lg:px-10"
      >
        <div className="overflow-hidden rounded-xl border border-white/10 bg-white/[0.06] md:grid md:grid-cols-[1fr_auto]">
          <div className="p-6 sm:p-8">
            <div className="mb-4 flex items-center gap-2 text-sm font-medium text-blue-300">
              <TerminalSquare className="size-4" />
              <BlurReveal speedReveal={2.2} speedSegment={1.2}>
                Леонид Болбачан — разработчик сайтов, ботов и AI-автоматизации
              </BlurReveal>
            </div>
            <h2 className="max-w-2xl text-2xl font-semibold tracking-normal sm:text-3xl">
              Есть задача для сайта, бота, API или автоматизации?
            </h2>
            <p className="mt-3 max-w-2xl leading-7 text-slate-400">
              Напишите коротко, что нужно сделать, какие есть примеры и какой
              результат ожидаете. Я помогу превратить идею в понятный рабочий
              проект.
            </p>
          </div>
          <div className="flex flex-col justify-center gap-3 border-t border-white/10 p-6 sm:p-8 md:border-l md:border-t-0">
            <Button
              asChild
              size="lg"
              className="w-full bg-white text-slate-950 hover:bg-slate-200"
            >
              <a href="#contact">
                Написать в Telegram
                <MessageCircle data-icon="inline-end" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full border-white/15 bg-white/5 text-white hover:bg-white/10"
            >
              <a href="#contact">
                Перейти на Kwork
                <ExternalLink data-icon="inline-end" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full border-white/15 bg-white/5 text-white hover:bg-white/10"
            >
              <a href="#projects">
                Посмотреть GitHub
                <Code2 data-icon="inline-end" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
