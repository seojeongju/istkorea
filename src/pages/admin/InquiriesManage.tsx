import { useState, useEffect } from 'react';
import { storage, type InquiryItem, type Comment } from '../../services/storage';
import { Mail, CheckCircle2, MessageCircle, Send } from 'lucide-react';

export const InquiriesManage = () => {
    const [inquiries, setInquiries] = useState<InquiryItem[]>([]);
    const [selectedInquiry, setSelectedInquiry] = useState<InquiryItem | null>(null);
    const [newComment, setNewComment] = useState('');

    useEffect(() => {
        loadInquiries();
    }, []);

    const loadInquiries = () => {
        setInquiries(storage.getInquiries());
    };

    const handleStatusToggle = (inquiry: InquiryItem) => {
        const updatedStatus = inquiry.status === 'pending' ? 'completed' : 'pending';
        const updatedList = inquiries.map(i => i.id === inquiry.id ? { ...i, status: updatedStatus } as InquiryItem : i);
        storage.saveInquiries(updatedList);

        // Update local state and selected inquiry
        setInquiries(updatedList);
        setSelectedInquiry(updatedList.find(i => i.id === inquiry.id) || null);
    };

    const handleAddComment = (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedInquiry || !newComment.trim()) return;

        const comment: Comment = {
            id: Date.now(),
            content: newComment,
            date: new Date().toISOString().split('T')[0],
            author: '관리자'
        };

        const updatedInquiry = {
            ...selectedInquiry,
            comments: [...(selectedInquiry.comments || []), comment]
        };

        const updatedList = inquiries.map(i => i.id === selectedInquiry.id ? updatedInquiry : i);
        storage.saveInquiries(updatedList);

        // Update local state
        setInquiries(updatedList);
        setSelectedInquiry(updatedInquiry);
        setNewComment('');
    };

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">문의사항 관리</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-[calc(100vh-150px)]">
                {/* List */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col">
                    <div className="p-4 border-b border-gray-100 font-bold text-gray-700">
                        목록 ({inquiries.length})
                    </div>
                    <div className="divide-y divide-gray-100 overflow-y-auto flex-1">
                        {inquiries.map((item) => (
                            <div
                                key={item.id}
                                onClick={() => setSelectedInquiry(item)}
                                className={`p-4 hover:bg-gray-50 cursor-pointer transition-colors ${selectedInquiry?.id === item.id ? 'bg-blue-50' : ''}`}
                            >
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <span className={`inline-block px-2 py-0.5 rounded text-xs font-medium mb-1 ${item.status === 'pending' ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'}`}>
                                            {item.status === 'pending' ? '미답변' : '답변완료'}
                                        </span>
                                        <h4 className="font-bold text-gray-900">{item.type}</h4>
                                    </div>
                                    <span className="text-xs text-gray-500">{item.date}</span>
                                </div>
                                <p className="text-sm text-gray-600 line-clamp-2">{item.content}</p>
                                <div className="mt-2 text-xs text-gray-400 flex justify-between items-center">
                                    <span>{item.name}</span>
                                    {item.comments && item.comments.length > 0 && (
                                        <span className="flex items-center gap-1 text-primary">
                                            <MessageCircle size={14} /> {item.comments.length}
                                        </span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Detail View */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col h-full overflow-hidden">
                    {selectedInquiry ? (
                        <>
                            <div className="flex justify-between items-start mb-6 shrink-0">
                                <div>
                                    <span className="text-primary text-sm font-bold">{selectedInquiry.type}</span>
                                    <h3 className="text-xl font-bold mt-1">문의 내용 상세</h3>
                                </div>
                                <button
                                    onClick={() => handleStatusToggle(selectedInquiry)}
                                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-colors ${selectedInquiry.status === 'pending'
                                            ? 'bg-green-500 text-white hover:bg-green-600'
                                            : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                                        }`}
                                >
                                    <CheckCircle2 size={16} />
                                    {selectedInquiry.status === 'pending' ? '답변 완료 처리' : '완료 취소'}
                                </button>
                            </div>

                            <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
                                {/* Info Cards */}
                                <div className="grid grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg mb-6">
                                    <div>
                                        <label className="text-xs text-gray-500">이름</label>
                                        <p className="font-medium">{selectedInquiry.name}</p>
                                    </div>
                                    <div>
                                        <label className="text-xs text-gray-500">연락처</label>
                                        <p className="font-medium">{selectedInquiry.phone}</p>
                                    </div>
                                    <div className="col-span-2">
                                        <label className="text-xs text-gray-500">이메일</label>
                                        <a href={`mailto:${selectedInquiry.email}`} className="font-medium text-primary hover:underline flex items-center gap-1">
                                            <Mail size={14} />
                                            {selectedInquiry.email}
                                        </a>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="mb-8">
                                    <label className="text-sm font-bold text-gray-700 block mb-2">문의 내용</label>
                                    <div className="p-4 border border-gray-200 rounded-lg bg-gray-50 min-h-[150px] whitespace-pre-wrap">
                                        {selectedInquiry.content}
                                    </div>
                                </div>

                                {/* Comments Section */}
                                <div className="border-t border-gray-200 pt-6">
                                    <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                                        <MessageCircle size={20} />
                                        관리자 메모 / 답변 기록
                                    </h4>

                                    <div className="space-y-4 mb-6">
                                        {selectedInquiry.comments && selectedInquiry.comments.length > 0 ? (
                                            selectedInquiry.comments.map((comment) => (
                                                <div key={comment.id} className="bg-blue-50 p-4 rounded-lg rounded-tl-none ml-4 relative border border-blue-100">
                                                    <div className="text-xs text-blue-800 font-bold mb-1 flex justify-between">
                                                        <span>{comment.author}</span>
                                                        <span className="text-blue-400 font-normal">{comment.date}</span>
                                                    </div>
                                                    <p className="text-sm text-gray-800 whitespace-pre-wrap">{comment.content}</p>
                                                </div>
                                            ))
                                        ) : (
                                            <p className="text-center text-gray-400 py-4 text-sm bg-gray-50 rounded-lg border border-dashed border-gray-200">
                                                등록된 답변이나 메모가 없습니다.
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Comment Input */}
                            <div className="mt-4 pt-4 border-t border-gray-100 bg-white">
                                <form onSubmit={handleAddComment} className="flex gap-2">
                                    <input
                                        type="text"
                                        value={newComment}
                                        onChange={(e) => setNewComment(e.target.value)}
                                        placeholder="답변 내용이나 메모를 입력하세요..."
                                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                                    />
                                    <button
                                        type="submit"
                                        disabled={!newComment.trim()}
                                        className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center gap-2 h-[42px]"
                                    >
                                        <Send size={18} />
                                        등록
                                    </button>
                                </form>
                            </div>
                        </>
                    ) : (
                        <div className="h-full flex items-center justify-center text-gray-400 flex-col gap-4">
                            <MessageCircle size={48} className="text-gray-200" />
                            <p>좌측 목록에서 문의를 선택해주세요.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
