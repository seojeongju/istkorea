import { storage } from '../../services/storage';
import { Newspaper, Users, MessageSquare } from 'lucide-react';

export const Dashboard = () => {
    const newsCount = storage.getNews().length;
    const inquiries = storage.getInquiries();
    const pendingInquiries = inquiries.filter(i => i.status === 'pending').length;
    const careersCount = storage.getCareers().length;

    const stats = [
        { title: '등록된 뉴스', value: newsCount, icon: Newspaper, color: 'bg-blue-500' },
        { title: '미답변 문의', value: pendingInquiries, icon: MessageSquare, color: 'bg-red-500' },
        { title: '채용 공고', value: careersCount, icon: Users, color: 'bg-green-500' },
    ];

    return (
        <div className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-800">대시보드</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {stats.map((stat) => (
                    <div key={stat.title} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-6">
                        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white ${stat.color}`}>
                            <stat.icon size={32} />
                        </div>
                        <div>
                            <p className="text-gray-500 text-sm mb-1">{stat.title}</p>
                            <h3 className="text-3xl font-bold text-gray-900">{stat.value}</h3>
                        </div>
                    </div>
                ))}
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-800 mb-6">최근 문의 내역</h3>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="border-b border-gray-200 text-gray-500 text-sm">
                                <th className="pb-4 font-medium">작성일</th>
                                <th className="pb-4 font-medium">유형</th>
                                <th className="pb-4 font-medium">이름</th>
                                <th className="pb-4 font-medium">상태</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {inquiries.slice(0, 5).map((item) => (
                                <tr key={item.id} className="text-sm">
                                    <td className="py-4 text-gray-600">{item.date}</td>
                                    <td className="py-4 text-gray-900 font-medium">{item.type}</td>
                                    <td className="py-4 text-gray-600">{item.name}</td>
                                    <td className="py-4">
                                        <span className={`px-2 py-1 rounded text-xs font-medium ${item.status === 'pending' ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-600'
                                            }`}>
                                            {item.status === 'pending' ? '미답변' : '답변완료'}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                            {inquiries.length === 0 && (
                                <tr>
                                    <td colSpan={4} className="py-8 text-center text-gray-400">문의 내역이 없습니다.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};
