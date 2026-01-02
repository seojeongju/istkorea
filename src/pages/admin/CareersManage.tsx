import { useState, useEffect, useRef } from 'react';
import { storage, type CareerItem } from '../../services/storage';
import { Plus, Trash2, Edit2 } from 'lucide-react';

// Reusing QuillEditor logic (ideally this should be a separate component but keeping it local for simplicity as requested)
const QuillEditor = ({ initialValue, onChange }: { initialValue: string, onChange: (val: string) => void }) => {
    const editorRef = useRef<HTMLDivElement>(null);
    const quillRef = useRef<any>(null);

    useEffect(() => {
        if (editorRef.current && !quillRef.current) {
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

                if (initialValue) {
                    quill.clipboard.dangerouslyPasteHTML(initialValue);
                }

                quill.on('text-change', () => {
                    const html = editorRef.current?.querySelector('.ql-editor')?.innerHTML;
                    onChange(html || '');
                });

                quillRef.current = quill;
            }
        }
    }, []);

    return <div className="bg-white"><div ref={editorRef} style={{ height: '300px' }} /></div>;
};

export const CareersManage = () => {
    const [careers, setCareers] = useState<CareerItem[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentCareer, setCurrentCareer] = useState<Partial<CareerItem>>({});

    useEffect(() => {
        loadCareers();
    }, []);

    const loadCareers = () => {
        setCareers(storage.getCareers());
    };

    const handleDelete = (id: number) => {
        if (confirm('정말 삭제하시겠습니까?')) {
            const updated = careers.filter(c => c.id !== id);
            storage.saveCareers(updated);
            loadCareers();
        }
    };

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        if (!currentCareer.title) return;

        let updatedCareers;
        if (currentCareer.id) {
            updatedCareers = careers.map(c => c.id === currentCareer.id ? { ...c, ...currentCareer } as CareerItem : c);
        } else {
            const newId = Math.max(...careers.map(c => c.id), 0) + 1;
            const newItem: CareerItem = {
                id: newId,
                title: currentCareer.title!,
                type: currentCareer.type || '신입',
                department: currentCareer.department || '공통',
                deadline: currentCareer.deadline || '채용시 마감',
                status: currentCareer.status || 'open',
                content: currentCareer.content || ''
            };
            updatedCareers = [newItem, ...careers];
        }

        storage.saveCareers(updatedCareers);
        loadCareers();
        closeModal();
    };

    const openModal = (item?: CareerItem) => {
        setCurrentCareer(item || { status: 'open', type: '신입' });
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setCurrentCareer({});
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-800">인재채용 관리</h2>
                <button
                    onClick={() => openModal()}
                    className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
                >
                    <Plus size={20} />
                    <span>채용 공고 등록</span>
                </button>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-gray-50 border-b border-gray-200">
                        <tr>
                            <th className="px-6 py-4 font-medium text-gray-500 w-20">No</th>
                            <th className="px-6 py-4 font-medium text-gray-500">채용 제목</th>
                            <th className="px-6 py-4 font-medium text-gray-500 w-24">구분</th>
                            <th className="px-6 py-4 font-medium text-gray-500 w-32">부서</th>
                            <th className="px-6 py-4 font-medium text-gray-500 w-32">마감일</th>
                            <th className="px-6 py-4 font-medium text-gray-500 w-24">상태</th>
                            <th className="px-6 py-4 font-medium text-gray-500 w-32">관리</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {careers.map((item) => (
                            <tr key={item.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4 text-gray-600">{item.id}</td>
                                <td className="px-6 py-4 font-medium text-gray-900">{item.title}</td>
                                <td className="px-6 py-4 text-gray-600">{item.type}</td>
                                <td className="px-6 py-4 text-gray-600">{item.department}</td>
                                <td className="px-6 py-4 text-gray-600">{item.deadline}</td>
                                <td className="px-6 py-4">
                                    <span className={`px-2 py-1 rounded text-xs font-medium whitespace-nowrap ${item.status === 'open' ? 'bg-green-50 text-green-600' : 'bg-gray-100 text-gray-500'}`}>
                                        {item.status === 'open' ? '진행중' : '마감'}
                                    </span>
                                </td>
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
                            <h3 className="text-xl font-bold">{currentCareer.id ? '공고 수정' : '새 공고 등록'}</h3>
                            <button onClick={closeModal} className="text-gray-500 hover:text-black">✕</button>
                        </div>

                        <div className="flex-1 overflow-y-auto p-6">
                            <form id="careerForm" onSubmit={handleSave} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">채용 제목</label>
                                    <input
                                        type="text"
                                        required
                                        value={currentCareer.title || ''}
                                        onChange={e => setCurrentCareer({ ...currentCareer, title: e.target.value })}
                                        className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">구분</label>
                                        <select
                                            value={currentCareer.type}
                                            onChange={e => setCurrentCareer({ ...currentCareer, type: e.target.value })}
                                            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                                        >
                                            <option value="신입">신입</option>
                                            <option value="경력">경력</option>
                                            <option value="무관">무관</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">부서</label>
                                        <input
                                            type="text"
                                            value={currentCareer.department || ''}
                                            onChange={e => setCurrentCareer({ ...currentCareer, department: e.target.value })}
                                            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">마감일</label>
                                        <input
                                            type="date"
                                            value={currentCareer.deadline || ''}
                                            onChange={e => setCurrentCareer({ ...currentCareer, deadline: e.target.value })}
                                            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">상태</label>
                                        <select
                                            value={currentCareer.status}
                                            onChange={e => setCurrentCareer({ ...currentCareer, status: e.target.value as any })}
                                            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                                        >
                                            <option value="open">진행중</option>
                                            <option value="closed">마감</option>
                                        </select>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">상세 내용 (자격요건, 우대사항 등)</label>
                                    <QuillEditor
                                        initialValue={currentCareer.content || ''}
                                        onChange={(content) => setCurrentCareer({ ...currentCareer, content })}
                                    />
                                </div>
                            </form>
                        </div>

                        <div className="p-6 border-t border-gray-200 flex justify-end gap-2">
                            <button type="button" onClick={closeModal} className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">취소</button>
                            <button type="submit" form="careerForm" className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90">저장</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
