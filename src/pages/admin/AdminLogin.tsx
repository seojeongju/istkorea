import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { storage } from '../../services/storage';
import { Lock, Eye, EyeOff } from 'lucide-react';

export const AdminLogin = () => {
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (storage.login(password)) {
            navigate('/admin/dashboard');
        } else {
            setError('비밀번호가 올바르지 않습니다.');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
                <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Lock className="text-primary w-8 h-8" />
                    </div>
                    <h1 className="text-2xl font-bold text-gray-900">관리자 로그인</h1>
                    <p className="text-gray-500 mt-2">관리자 페이지 접근을 위해 인증이 필요합니다.</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">비밀번호</label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all pr-12"
                                placeholder="비밀번호를 입력하세요"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                            >
                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                        </div>
                        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-primary text-white py-3 rounded-xl font-bold hover:bg-primary/90 transition-colors"
                    >
                        로그인
                    </button>

                    <div className="text-center text-xs text-gray-400">
                        Default Password: admin1234
                    </div>
                </form>
            </div>
        </div>
    );
};

