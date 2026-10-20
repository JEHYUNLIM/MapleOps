import React from 'react';
import Link from 'next/link';

interface User {
  id: string;
  nickname: string;
  level: number;
  world: string;
  mesos: number;
  status: 'ACTIVE' | 'BANNED' | 'SUSPENDED'; // 이 3가지 문자열만 허용 (Union Type)
  lastLogin: string;
}

const mockUsers: User[] = [
  {
    id: '102938',
    nickname: '아델123',
    level: 285,
    world: '루나',
    mesos: 1823293021,
    status: 'ACTIVE',
    lastLogin: '2026-10-20T10:30:00Z',
  },
  {
    id: '102939',
    nickname: '초보도적',
    level: 152,
    world: '스카니아',
    mesos: 45000000,
    status: 'BANNED',
    lastLogin: '2026-10-19T14:20:00Z',
  },
  {
    id: '102940',
    nickname: '마법사킹',
    level: 277,
    world: '크로아',
    mesos: 9999999999,
    status: 'ACTIVE',
    lastLogin: '2026-10-20T09:15:00Z',
  },
];

export default function UsersPage() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900">Users</h2>
      <p className="mt-2 text-gray-600">사용자 관리 페이지입니다.</p>

      <div className="mt-6 overflow-hidden rounded-lg border border-gray-200 bg-white shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                UID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                닉네임
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                레벨
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                월드
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                상태
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                액션
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {mockUsers.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50">
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">
                  #{user.id}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-blue-600 cursor-pointer hover:underline">
                  <Link href={`/users/${user.id}`}>{user.nickname}</Link>
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                  {user.level}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                  {user.world}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm">
                  {/* 상태값에 따라 뱃지 색상을 다르게 렌더링 */}
                  <span
                    className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                      user.status === 'ACTIVE'
                        ? 'bg-green-100 text-green-800'
                        : user.status === 'BANNED'
                          ? 'bg-red-100 text-red-800'
                          : 'bg-yellow-100 text-yellow-800'
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-500">
                  <button className="text-blue-600 hover:text-blue-900">
                    제재하기
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
