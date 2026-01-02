
export interface NewsItem {
    id: number;
    title: string;
    date: string;
    content: string;
}

export interface Comment {
    id: number;
    content: string;
    date: string;
    author: string; // e.g., 'Admin'
}

export interface InquiryItem {
    id: number;
    name: string;
    email: string;
    phone: string;
    type: string;
    content: string;
    date: string;
    status: 'pending' | 'completed';
    comments?: Comment[]; // Added comments field
}

export interface CareerItem {
    id: number;
    title: string;
    type: string; // e.g., '신입', '경력'
    department: string;
    deadline: string;
    status: 'open' | 'closed';
    content: string; // Added content field for job description
}

const INITIAL_NEWS: NewsItem[] = [
    { id: 1, title: 'IST KOREA 홈페이지가 새롭게 리뉴얼 되었습니다.', date: '2024.03.15', content: '홈페이지 리뉴얼 내용...' },
    { id: 2, title: '2024년 상반기 신입/경력 사원 공개 채용 안내', date: '2024.03.10', content: '채용 공고 내용...' },
    { id: 3, title: '차세대 디스플레이 장비 기술 특허 획득 소식', date: '2024.02.28', content: '특허 획득 내용...' },
    { id: 4, title: '국제 반도체 장비 전시회(SEMICON) 참가 안내', date: '2024.02.20', content: '전시회 참가 내용...' }
];

const INITIAL_INQUIRIES: InquiryItem[] = [
    { id: 1, name: '김철수', email: 'kim@example.com', phone: '010-1234-5678', type: '제품 문의', content: '제품 가격 문의드립니다.', date: '2024.03.20', status: 'pending' },
    { id: 2, name: '이영희', email: 'lee@example.com', phone: '010-9876-5432', type: '기술 지원', content: '설치 관련 문의입니다.', date: '2024.03.19', status: 'completed' }
];

const INITIAL_CAREERS: CareerItem[] = [
    { id: 1, title: '기계설계 경력직 채용', type: '경력', department: '연구소', deadline: '2024.04.30', status: 'open', content: '기계설계 경력직 채용 상세 내용입니다.' },
    { id: 2, title: 'SW 개발 신입 채용', type: '신입', department: 'SW개발팀', deadline: '2024.04.15', status: 'open', content: 'SW 개발 신입 채용 상세 내용입니다.' }
];

const STORAGE_KEYS = {
    NEWS: 'ist_news',
    INQUIRIES: 'ist_inquiries',
    CAREERS: 'ist_careers',
    AUTH: 'ist_admin_auth'
};

export const storage = {
    // News
    getNews: (): NewsItem[] => {
        const stored = localStorage.getItem(STORAGE_KEYS.NEWS);
        return stored ? JSON.parse(stored) : INITIAL_NEWS;
    },
    saveNews: (news: NewsItem[]) => {
        localStorage.setItem(STORAGE_KEYS.NEWS, JSON.stringify(news));
    },

    // Inquiries
    getInquiries: (): InquiryItem[] => {
        const stored = localStorage.getItem(STORAGE_KEYS.INQUIRIES);
        return stored ? JSON.parse(stored) : INITIAL_INQUIRIES;
    },
    saveInquiries: (inquiries: InquiryItem[]) => {
        localStorage.setItem(STORAGE_KEYS.INQUIRIES, JSON.stringify(inquiries));
    },

    // Careers
    getCareers: (): CareerItem[] => {
        const stored = localStorage.getItem(STORAGE_KEYS.CAREERS);
        return stored ? JSON.parse(stored) : INITIAL_CAREERS;
    },
    saveCareers: (careers: CareerItem[]) => {
        localStorage.setItem(STORAGE_KEYS.CAREERS, JSON.stringify(careers));
    },

    // Auth
    isAuthenticated: () => {
        return localStorage.getItem(STORAGE_KEYS.AUTH) === 'true';
    },
    login: (password: string) => {
        if (password === 'admin1234') { // Simple mock password
            localStorage.setItem(STORAGE_KEYS.AUTH, 'true');
            return true;
        }
        return false;
    },
    logout: () => {
        localStorage.removeItem(STORAGE_KEYS.AUTH);
    }
};
