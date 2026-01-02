import { useState, useEffect, useRef } from 'react';
import { storage, type NewsItem } from '../../services/storage';
import { Plus, Trash2, Edit2 } from 'lucide-react';

// Wrapper for Quill JS (CDN version)
const QuillEditor = ({ initialValue, onChange }: { initialValue: string, onChange: (val: string) => void }) => {
    const editorRef = useRef<HTMLDivElement>(null);
    const quillRef = useRef<any>(null);

    useEffect(() => {
        if (editorRef.current && !quillRef.current) {
            // Check if Quill is loaded
            if ((window as any).Quill) {
                const Quill = (window as any).Quill;
                const quill = new Quill(editorRef.current, {
                    theme: 'snow',
                    modules: {
                        toolbar: [
                            [{ 'header': [1, 2, 3, false] }],
                            ['bold', 'italic', 'underline', 'strike'],
                            [{ 'color': [] }, { 'background': [] }],
                            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                            ['link', 'image'],
                            ['clean']
                        ]
                    }
                });

                // Set initial value
                if (initialValue) {
                    quill.clipboard.dangerouslyPasteHTML(initialValue);
                }

                // Listen for changes
                quill.on('text-change', () => {
                    const html = editorRef.current?.querySelector('.ql-editor')?.innerHTML;
                    onChange(html || '');
                });

                quillRef.current = quill;
            } else {
                console.error('Quill is not loaded');
            }
        }
    }, []); // Run once on mount

    return (
        <div className="bg-white">
            <div ref={editorRef} style={{ height: '300px' }} />
        </div>
    );
};

export const NewsManage = () => {
    const [news, setNews] = useState<NewsItem[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentNews, setCurrentNews] = useState<Partial<NewsItem>>({});

    useEffect(() => {
        loadNews();
    }, []);

    const loadNews = () => {
        setNews(storage.getNews());
    };

    const handleDelete = (id: number) => {
        if (confirm('정말 삭제하시겠습니까?')) {
            const updated = news.filter(n => n.id !== id);
            storage.saveNews(updated);
            loadNews();
        }
    };

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        if (!currentNews.title || !currentNews.date) return;

        let updatedNews;
        if (currentNews.id) {
            // Edit
            updatedNews = news.map(n => n.id === currentNews.id ? { ...n, ...currentNews } as NewsItem : n);
        } else {
            // Add
            const newId = Math.max(...news.map(n => n.id), 0) + 1;
            const newItem: NewsItem = {
                id: newId,
                title: currentNews.title,
                date: currentNews.date,
                content: currentNews.content || ''
            };
            updatedNews = [newItem, ...news];
        }

        storage.saveNews(updatedNews);
        loadNews();
        closeModal();
    };

    const openModal = (item?: NewsItem) => {
        setCurrentNews(item || { date: new Date().toISOString().split('T')[0] });
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setCurrentNews({});
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-800">기업소식 관리</h2>
                <button
                    onClick={() => openModal()}
                    className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
                >
                    <Plus size={20} />
                    <span>글쓰기</span>
                </button>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-gray-50 border-b border-gray-200">
                        <tr>
                            <th className="px-6 py-4 font-medium text-gray-500 w-20">No</th>
                            <th className="px-6 py-4 font-medium text-gray-500">제목</th>
                            <th className="px-6 py-4 font-medium text-gray-500 w-32">작성일</th>
                            <th className="px-6 py-4 font-medium text-gray-500 w-32">관리</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {news.map((item) => (
                            <tr key={item.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4 text-gray-600">{item.id}</td>
                                <td className="px-6 py-4 font-medium text-gray-900">{item.title}</td>
                                <td className="px-6 py-4 text-gray-600">{item.date}</td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-2">
                                        <button onClick={() => openModal(item)} className="p-2 text-gray-400 hover:text-primary transition-colors">
                                            <Edit2 size={18} />
                                        </button>
                                        <button onClick={() => handleDelete(item.id)} className="p-2 text-gray-400 hover:text-red-500 transition-colors">
                                            <Trash2 size={18} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
                    <div className="bg-white rounded-xl w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl">
                        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
                            <h3 className="text-xl font-bold">{currentNews.id ? '소식 수정' : '새 소식 등록'}</h3>
                            <button onClick={closeModal} className="text-gray-500 hover:text-black">
                                ✕
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto p-6">
                            <form id="newsForm" onSubmit={handleSave} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">제목</label>
                                    <input
                                        type="text"
                                        required
                                        value={currentNews.title || ''}
                                        onChange={e => setCurrentNews({ ...currentNews, title: e.target.value })}
                                        className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">작성일</label>
                                    <input
                                        type="date"
                                        required
                                        value={currentNews.date || ''}
                                        onChange={e => setCurrentNews({ ...currentNews, date: e.target.value })}
                                        className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">내용</label>
                                    <QuillEditor
                                        initialValue={currentNews.content || ''}
                                        onChange={(content) => setCurrentNews({ ...currentNews, content })}
                                    />
                                </div>
                            </form>
                        </div>

                        <div className="p-6 border-t border-gray-200 flex justify-end gap-2">
                            <button type="button" onClick={closeModal} className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">취소</button>
                            <button type="submit" form="newsForm" className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90">저장</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
