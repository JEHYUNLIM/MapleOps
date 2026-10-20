import type { ReactNode } from 'react';
import Link from 'next/link';

interface AppShellProps {
  children: ReactNode;
}

export default function AppShell({ children }: AppShellProps) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-64 bg-gray-900 text-white">
        <div className="p-6">
          <h1 className="text-xl font-bold">MapleOps</h1>
          <p className="mt-1 text-sm text-gray-400">Game Operations Platform</p>
        </div>

        <nav className="px-4">
          <ul className="space-y-1">
            <li>
              <Link
                href="/"
                className="block rounded px-3 py-2 text-sm hover:bg-gray-800"
              >
                Dashboard
              </Link>
            </li>

            <li>
              <Link
                href="/users"
                className="block rounded px-3 py-2 text-sm hover:bg-gray-800"
              >
                Users
              </Link>
            </li>

            <li>
              <Link
                href="/characters"
                className="block rounded px-3 py-2 text-sm hover:bg-gray-800"
              >
                Characters
              </Link>
            </li>

            <li>
              <Link
                href="/items"
                className="block rounded px-3 py-2 text-sm hover:bg-gray-800"
              >
                Items
              </Link>
            </li>

            <li>
              <Link
                href="/auctions"
                className="block rounded px-3 py-2 text-sm hover:bg-gray-800"
              >
                Auctions
              </Link>
            </li>

            <li>
              <Link
                href="/events"
                className="block rounded px-3 py-2 text-sm hover:bg-gray-800"
              >
                Events
              </Link>
            </li>

            <li>
              <Link
                href="/ai"
                className="block rounded px-3 py-2 text-sm hover:bg-gray-800"
              >
                AI Assistant
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      <main className="flex-1">
        <header className="h-16 border-b bg-white px-6 flex items-center justify-between">
          <span className="text-sm font-medium text-gray-700">
            Game Operations
          </span>

          <span className="text-sm text-gray-500">Admin</span>
        </header>

        <div className="p-6">{children}</div>
      </main>
    </div>
  );
}
