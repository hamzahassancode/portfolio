type Token = [string, string];

const KEYWORD = 'text-caramel-300';
const TYPE = 'text-[#e9c9a4]';
const PROP = 'text-cream-300';
const STRING = 'text-[#b9c7a5]';
const PUNCT = 'text-cocoa-400';

const str = (value: string): Token => [`"${value}"`, STRING];

const list = (values: string[]): Token[] => [
  ['listOf', TYPE],
  ['(', PUNCT],
  ...values.flatMap((v, i): Token[] => (i === 0 ? [str(v)] : [[', ', PUNCT], str(v)])),
  [')', PUNCT],
];

const field = (name: string, value: Token[]): Token[] => [
  ['    ', PUNCT],
  [name, PROP],
  [' = ', PUNCT],
  ...value,
  [',', PUNCT],
];

interface Props {
  role: string;
  company: string;
  focus: string[];
  stack: string[];
  location: string;
}

export default function ProfileCodeCard({ role, company, focus, stack, location }: Props) {
  const lines: Token[][] = [
    [['val ', KEYWORD], ['hamza', PROP], [' = ', PUNCT], ['Engineer', TYPE], ['(', PUNCT]],
    field('role', [str(role)]),
    field('company', [str(company)]),
    field('focus', list(focus)),
    field('stack', list(stack)),
    field('location', [str(location)]),
    [[')', PUNCT]],
  ];

  return (
    <figure
      className="w-full max-w-lg rounded-2xl bg-cocoa-900 shadow-2xl shadow-caramel-700/25 ring-1 ring-cocoa-700 overflow-hidden"
      aria-label={`${role} at ${company}, based in ${location}. Focus: ${focus.join(', ')}. Stack: ${stack.join(', ')}.`}
    >
      <div className="flex items-center gap-2 px-4 py-3 border-b border-cocoa-700/80">
        <span className="w-3 h-3 rounded-full bg-[#d98b6a]" />
        <span className="w-3 h-3 rounded-full bg-caramel-300" />
        <span className="w-3 h-3 rounded-full bg-[#9fb08c]" />
        <span className="ml-3 text-xs text-cocoa-400 font-mono">Hamza.kt</span>
      </div>
      <pre className="px-5 py-5 text-[13px] leading-7 font-mono whitespace-pre-wrap" aria-hidden="true">
        {lines.map((tokens, i) => (
          <div key={i} className="flex">
            <span className="w-6 shrink-0 select-none text-cocoa-500 text-right mr-4">{i + 1}</span>
            <code className="block pl-[12ch] -indent-[12ch]">
              {tokens.map(([text, cls], j) => (
                <span key={j} className={cls}>{text}</span>
              ))}
            </code>
          </div>
        ))}
      </pre>
    </figure>
  );
}
