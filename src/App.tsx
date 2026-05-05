/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Users, 
  GraduationCap, 
  Plus, 
  Search, 
  Trash2, 
  Edit3, 
  X, 
  Camera,
  Info,
  ChevronRight,
  BookOpen,
  LayoutDashboard,
  Globe,
  LogIn,
  Home,
  FileUp,
  RefreshCw
} from 'lucide-react';
import { Student, Teacher, ViewMode, Language, User, AppSettings } from './types';

const translations = {
  bn: {
    home: 'হোম',
    about: 'আমাদের সম্পর্কে',
    login: 'লগইন',
    logout: 'লগ-আউট',
    studentMenu: 'ছাত্র মেনু',
    teacherMenu: 'শিক্ষক মেনু',
    addNew: 'নতুন যোগ করুন',
    students: 'ছাত্র-ছাত্রী',
    teachers: 'শিক্ষকবৃন্দ',
    welcome: 'স্বাগতম আমাদের কলেজে',
    tagline: 'ভবিষ্যৎ গড়ি কারিগরি শিক্ষার মাধ্যমে',
    description: 'আমাদের এখানে উন্নত ল্যাবরেটরি এবং অভিজ্ঞ শিক্ষকদের মাধ্যমে হাতে কলমে শিক্ষা দেওয়া হয়।',
    searchStudent: 'ছাত্রের নাম বা রোল খুঁজুন...',
    searchTeacher: 'শিক্ষকের নাম বা বিভাগ খুঁজুন...',
    editInfo: 'তথ্য সম্পাদনা',
    save: 'সংরক্ষণ করুন',
    name: 'নাম',
    email: 'ইমেইল',
    roll: 'রোল নম্বর',
    shift: 'শিফট',
    semester: 'সেমিস্টার',
    department: 'বিভাগ/বিষয়',
    imageUpload: 'ছবি আপলোড করুন',
    fromFile: 'কম্পিউটার থেকে',
    fromCamera: 'ক্যামেরা থেকে',
    capture: 'ছবি তুলুন',
    retry: 'আবার চেষ্টা করুন',
    firstShift: 'প্রথম শিফট',
    secondShift: 'দ্বিতীয় শিফট',
    profileStudent: 'শিক্ষার্থী প্রোফাইল',
    profileTeacher: 'শিক্ষক প্রোফাইল',
    edit: 'সম্পাদনা',
    delete: 'মুছে ফেলুন',
    confirmDelete: 'আপনি কি নিশ্চিত যে আপনি এটি মুছে ফেলতে চান?',
    noResults: 'কোন তথ্য পাওয়া যায়নি।',
    imageUrlLabel: 'বা ছবি লিঙ্ক (URL)',
    collegeTitle: 'ডিপ্লোমা হাব',
    loginTitle: 'সিস্টেমে লগইন করুন',
    enterName: 'আপনার নাম লিখুন',
    enterEmail: 'আপনার ইমেইল লিখুন',
    welcomeUser: 'শুভেচ্ছা',
    dashboard: 'ড্যাশবোর্ড',
    settings: 'সেটিংস',
    changeLogo: 'লোগো পরিবর্তন',
    changeName: 'কলেজের নাম পরিবর্তন',
    changeHeroBg: 'হিরো ব্যাকগ্রাউন্ড পরিবর্তন (৩টি ছবি)',
    heroImageLabel: 'ছবি',
    saveSettings: 'সেটিংস সংরক্ষণ করুন',
    aboutTitle: 'ডিপ্লোমা হাব সম্পর্কে',
    authorInfo: 'প্রতিষ্ঠাতার তথ্য',
    contactEmail: 'যোগাযোগের ইমেইল',
    aboutParagraph: 'আমাদের লক্ষ্য হলো মানসম্মত কারিগরি শিক্ষার মাধ্যমে দক্ষ জনবল তৈরি করা। আধুনিক প্রযুক্তির সাথে তাল মিলিয়ে আমরা আমাদের শিক্ষার্থীদের গড়ে তুলি।',
  },
  en: {
    home: 'Home',
    about: 'About Us',
    login: 'Login',
    logout: 'Logout',
    studentMenu: 'Student Menu',
    teacherMenu: 'Teacher Menu',
    addNew: 'Add New',
    students: 'Students',
    teachers: 'Teachers',
    welcome: 'Welcome to Our College',
    tagline: 'Shaping the Future through Technical Education',
    description: 'We provide hands-on education through advanced laboratories and experienced teachers.',
    searchStudent: 'Search student name or roll...',
    searchTeacher: 'Search teacher name or dept...',
    editInfo: 'Edit Information',
    save: 'Save Changes',
    name: 'Name',
    email: 'Email',
    roll: 'Roll Number',
    shift: 'Shift',
    semester: 'Semester',
    department: 'Department/Subject',
    imageUpload: 'Upload Photo',
    fromFile: 'From Computer',
    fromCamera: 'From Camera',
    capture: 'Capture Photo',
    retry: 'Retry',
    firstShift: 'First Shift',
    secondShift: 'Second Shift',
    profileStudent: 'Student Profile',
    profileTeacher: 'Teacher Profile',
    edit: 'Edit',
    delete: 'Delete',
    confirmDelete: 'Are you sure you want to delete this?',
    noResults: 'No information found.',
    imageUrlLabel: 'or Image URL',
    collegeTitle: 'Diploma Hub',
    loginTitle: 'Login to System',
    enterName: 'Enter your name',
    enterEmail: 'Enter your email',
    welcomeUser: 'Welcome',
    dashboard: 'Dashboard',
    settings: 'Settings',
    changeLogo: 'Change Logo',
    changeName: 'Change College Name',
    changeHeroBg: 'Change Hero Background (3 Images)',
    heroImageLabel: 'Image',
    saveSettings: 'Save Settings',
    aboutTitle: 'About Diploma Hub',
    authorInfo: 'Founder Information',
    contactEmail: 'Contact Email',
    aboutParagraph: 'Our mission is to create skilled manpower through quality technical education. We prepare our students in line with modern technology.',
  }
};

// Mock Data
const initialStudents: Student[] = [
  { id: '1', name: 'Ariful Islam', roll: 'D-10234', shift: 'First', semester: '6th', imageUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200&h=200' },
  { id: '2', name: 'Nusrat Jahan', roll: 'D-10256', shift: 'Second', semester: '4th', imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200' },
  { id: '3', name: 'Sabbir Ahmed', roll: 'D-10289', shift: 'First', semester: '8th', imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200' },
];

const initialTeachers: Teacher[] = [
  { id: '1', name: 'Dr. Kamal Hossain', department: 'Computer Science', imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200' },
  { id: '2', name: 'Mst. Rabeya Khan', department: 'Electrical Engineering', imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200&h=200' },
];

export default function App() {
  const [lang, setLang] = useState<Language>('bn');
  const t = translations[lang];
  
  const [viewMode, setViewMode] = useState<ViewMode>('home');
  const [user, setUser] = useState<User | null>(() => {
    const saved = localStorage.getItem('user');
    return saved ? JSON.parse(saved) : null;
  });
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const [students, setStudents] = useState<Student[]>(() => {
    const saved = localStorage.getItem('students');
    return saved ? JSON.parse(saved) : initialStudents;
  });
  const [teachers, setTeachers] = useState<Teacher[]>(() => {
    const saved = localStorage.getItem('teachers');
    return saved ? JSON.parse(saved) : initialTeachers;
  });

  const defaultSettings: AppSettings = {
    collegeName: 'ডিপ্লোমা হাব',
    collegeLogo: '',
    heroImages: [
      'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1200&h=600',
      'https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80&w=1200&h=600',
      'https://images.unsplash.com/photo-1525921429624-479b6a2237e8?auto=format&fit=crop&q=80&w=1200&h=600'
    ]
  };

  const [settings, setSettings] = useState<AppSettings>(() => {
    const saved = localStorage.getItem('appSettings');
    if (saved) {
      const parsed = JSON.parse(saved);
      // Migrate old settings or ensure heroImages exists
      if (!parsed.heroImages || !Array.isArray(parsed.heroImages)) {
        return {
          ...defaultSettings,
          ...parsed,
          heroImages: defaultSettings.heroImages
        };
      }
      return parsed;
    }
    return defaultSettings;
  });

  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);

  // Hero Carousel Effect
  useEffect(() => {
    if (viewMode !== 'home' || !settings.heroImages.length) return;
    
    const interval = setInterval(() => {
      setCurrentHeroIndex(prev => (prev + 1) % settings.heroImages.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [viewMode, settings.heroImages]);

  const [searchTerm, setSearchTerm] = useState('');
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<Student | Teacher | null>(null);
  const [selectedItem, setSelectedItem] = useState<Student | Teacher | null>(null);

  const safeSave = (key: string, value: any) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.warn('LocalStorage Quota Exceeded', e);
      if (e instanceof DOMException && e.name === 'QuotaExceededError') {
        alert(lang === 'bn' ? 'স্টোরেজ পূর্ণ হয়ে গেছে! অনুগ্রহ করে ছোট ছবি ব্যবহার করুন।' : 'Storage is full! Please use smaller images.');
      }
    }
  };

  // Persistence Effects
  useEffect(() => {
    safeSave('students', students);
  }, [students]);

  useEffect(() => {
    safeSave('teachers', teachers);
  }, [teachers]);

  useEffect(() => {
    safeSave('appSettings', settings);
  }, [settings]);

  useEffect(() => {
    if (user) {
      safeSave('user', user);
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);

  const [deleteConfirm, setDeleteConfirm] = useState<{ id: string, type: 'students' | 'teachers' } | null>(null);

  const handleDelete = (id: string, type: 'students' | 'teachers') => {
    setDeleteConfirm({ id, type });
  };

  const confirmDelete = () => {
    if (!deleteConfirm) return;
    const { id, type } = deleteConfirm;
    
    if (type === 'students') {
      setStudents(prev => prev.filter(s => String(s.id) !== String(id)));
    } else {
      setTeachers(prev => prev.filter(t => String(t.id) !== String(id)));
    }

    setDeleteConfirm(null);
    setIsDetailOpen(false);
    setSelectedItem(null);
  };

  // Camera and File States
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [isCameraActive, setIsCameraActive] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const toggleLanguage = () => setLang(prev => prev === 'bn' ? 'en' : 'bn');

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    setUser({
      name: data.name as string,
      email: data.email as string,
      isLoggedIn: true
    });
    setIsLoginModalOpen(false);
  };

  const handleLogout = () => {
    setUser(null);
    setIsProfileOpen(false);
    setViewMode('home');
  };

  // Filter items based on search
  const filteredStudents = students.filter(s => 
    s.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    s.roll.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredTeachers = teachers.filter(t => 
    t.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    t.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEdit = (item: Student | Teacher) => {
    setEditingItem(item);
    setPreviewImage(item.imageUrl);
    setIsModalOpen(true);
  };

  const handleOpenDetail = (item: Student | Teacher) => {
    setSelectedItem(item);
    setIsDetailOpen(true);
  };

  const handleSave = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const itemData: any = Object.fromEntries(formData.entries());
    
    const imageUrl = previewImage || itemData.imageUrl || 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&q=80&w=200&h=200';

    if (editingItem) {
      if (viewMode === 'students') {
        setStudents(prev => prev.map(s => s.id === editingItem.id ? { ...s, ...itemData, imageUrl } : s));
      } else {
        setTeachers(prev => prev.map(t => t.id === editingItem.id ? { ...t, ...itemData, imageUrl } : t));
      }
    } else {
      const newItem = { 
        ...itemData, 
        id: Date.now().toString(36) + Math.random().toString(36).substring(2),
        imageUrl
      };
      if (viewMode === 'students') {
        setStudents(prev => [newItem, ...prev]);
      } else {
        setTeachers(prev => [newItem, ...prev]);
      }
    }
    
    setIsModalOpen(false);
    setEditingItem(null);
    setPreviewImage(null);
    stopCamera();
  };

  // Camera logic
  const startCamera = async () => {
    setIsCameraActive(true);
    setPreviewImage(null);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' } });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (err) {
      console.error("Camera access denied", err);
      setIsCameraActive(false);
    }
  };

  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      stream.getTracks().forEach(track => track.stop());
      videoRef.current.srcObject = null;
    }
    setIsCameraActive(false);
  };

  const capturePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        const dataUrl = canvas.toDataURL('image/jpeg');
        setPreviewImage(dataUrl);
        stopCamera();
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        alert(lang === 'bn' ? 'ফাইলটি অনেক বড়! ২ মেগাবাইটের নিচের ছবি ব্যবহার করুন।' : 'File is too large! Please use images under 2MB.');
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSettingsFileChange = (e: React.ChangeEvent<HTMLInputElement>, field: 'logo' | 'hero', index?: number) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        alert(lang === 'bn' ? 'ফাইলটি অনেক বড়! ২ মেগাবাইটের নিচের ছবি ব্যবহার করুন।' : 'File is too large! Please use images under 2MB.');
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        if (field === 'logo') {
          setSettings(prev => ({ ...prev, collegeLogo: result }));
        } else if (field === 'hero' && index !== undefined) {
          setSettings(prev => {
            const newImages = [...prev.heroImages];
            newImages[index] = result;
            return { ...prev, heroImages: newImages };
          });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFCFB] font-sans text-gray-900 transition-colors duration-500">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-morphism py-4 px-6 md:px-12 flex justify-between items-center shadow-sm">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => setViewMode('home')}>
          <div className={`flex items-center justify-center ${!settings.collegeLogo ? 'bg-indigo-600 p-2 rounded-xl text-white' : ''}`}>
            {settings.collegeLogo ? (
              <img src={settings.collegeLogo} alt="Logo" className="h-10 w-auto object-contain" referrerPolicy="no-referrer" />
            ) : (
              <GraduationCap size={24} />
            )}
          </div>
          <span className="text-xl font-display font-bold tracking-tight text-indigo-950">{settings.collegeName}</span>
        </div>
        
        <div className="hidden lg:flex items-center gap-8 text-sm font-bold">
          <button 
            onClick={() => setViewMode('home')}
            className={`flex items-center gap-1 transition-colors ${viewMode === 'home' ? 'text-indigo-600 underline decoration-2 underline-offset-8' : 'text-gray-500 hover:text-indigo-400'}`}
          >
            <Home size={16}/> {t.home}
          </button>
          <button 
            onClick={() => setViewMode('students')}
            className={`transition-colors ${viewMode === 'students' ? 'text-indigo-600 underline decoration-2 underline-offset-8' : 'text-gray-500 hover:text-indigo-400'}`}
          >
            {t.studentMenu}
          </button>
          <button 
            onClick={() => setViewMode('teachers')}
            className={`transition-colors ${viewMode === 'teachers' ? 'text-indigo-600 underline decoration-2 underline-offset-8' : 'text-gray-500 hover:text-indigo-400'}`}
          >
            {t.teacherMenu}
          </button>
          <button 
            onClick={() => setViewMode('about')}
            className={`transition-colors ${viewMode === 'about' ? 'text-indigo-600 underline decoration-2 underline-offset-8' : 'text-gray-500 hover:text-indigo-400'}`}
          >
            {t.about}
          </button>
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={toggleLanguage}
            className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full text-indigo-600 transition-all flex items-center gap-2 px-4"
          >
            <Globe size={18} />
            <span className="text-xs font-bold uppercase">{lang === 'bn' ? 'English' : 'বাংলা'}</span>
          </button>
          
          {user ? (
            <div className="relative">
              <button 
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center gap-2 bg-white border border-gray-200 p-1 pr-4 rounded-full hover:bg-gray-50 transition-all shadow-sm"
              >
                <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-sm">
                  {user.name.charAt(0)}
                </div>
                <div className="hidden md:block text-left">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none">{t.welcomeUser}</p>
                  <p className="text-xs font-bold text-gray-900 leading-none mt-0.5">{user.name}</p>
                </div>
              </button>
              
              <AnimatePresence>
                {isProfileOpen && (
                  <>
                    <div className="fixed inset-0 z-[-1]" onClick={() => setIsProfileOpen(false)} />
                    <motion.div 
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute right-0 mt-3 w-56 bg-white rounded-2xl shadow-2xl border border-gray-100 py-2 z-50"
                    >
                      <button 
                        onClick={() => { setViewMode('dashboard'); setIsProfileOpen(false); }}
                        className="w-full flex items-center gap-3 px-4 py-3 text-sm font-bold text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                      >
                        <LayoutDashboard size={18}/>
                        {t.dashboard}
                      </button>
                      <div className="mx-2 my-1 border-t border-gray-50" />
                      <button 
                        onClick={handleLogout}
                        className="w-full flex items-center gap-3 px-4 py-3 text-sm font-bold text-red-600 hover:bg-red-50 transition-colors"
                      >
                        <LogIn size={18} className="rotate-180"/>
                        {t.logout}
                      </button>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <button 
              onClick={() => setIsLoginModalOpen(true)}
              className="flex items-center gap-2 bg-white border border-gray-200 px-5 py-2 rounded-full text-sm font-bold text-gray-700 hover:bg-gray-50 transition-all shadow-sm"
            >
              <LogIn size={18} className="text-indigo-600"/>
              {t.login}
            </button>
          )}
        </div>
      </nav>

      {/* Hero Section - Only on Home */}
      <AnimatePresence>
        {viewMode === 'home' && (
          <motion.header 
            key="hero"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="pt-24 pb-8 px-6 md:px-12 overflow-hidden"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative h-[300px] md:h-[500px] rounded-[3rem] overflow-hidden group shadow-2xl bg-indigo-900"
            >
            <AnimatePresence mode="popLayout">
              {settings.heroImages.length > 0 && settings.heroImages[currentHeroIndex] && (
                <motion.img 
                  key={currentHeroIndex}
                  src={settings.heroImages[currentHeroIndex]} 
                  alt="College Campus" 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.5 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.5 }}
                  className="absolute inset-0 w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              )}
            </AnimatePresence>
              
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/90 via-indigo-950/20 to-transparent flex flex-col justify-center items-center p-8 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="max-w-4xl"
                >
                  <span className="inline-block bg-indigo-500/30 backdrop-blur-md px-6 py-2 rounded-full text-xs font-bold text-indigo-100 uppercase tracking-widest mb-6 border border-white/10">
                    {t.welcome}
                  </span>
                  <h1 className="text-4xl md:text-7xl font-display font-bold text-white leading-tight mb-6">
                    {lang === 'bn' ? (
                      <>ভবিষ্যৎ গড়ি <span className="text-indigo-400 bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-white">কারিগরি</span> শিক্ষার মাধ্যমে</>
                    ) : (
                      <>Shaping the <span className="text-indigo-400">Future</span> with Technical Skills</>
                    )}
                  </h1>
                  <p className="text-indigo-100/80 max-w-2xl mx-auto text-lg md:text-xl font-medium">
                    {t.description}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </motion.header>
        )}
      </AnimatePresence>

      {/* Action Area below Hero */}
      <div className={['students', 'teachers'].includes(viewMode) ? "px-6 md:px-12 py-8 flex flex-col lg:flex-row gap-8 items-center justify-between sticky top-[72px] z-40 bg-[#FDFCFB]/80 backdrop-blur-md" : "hidden"}>
        <div className="flex gap-4 p-1 bg-gray-100 rounded-full">
          <button 
            onClick={() => setViewMode('students')}
            className={`px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 ${viewMode === 'students' ? 'bg-white text-indigo-600 shadow-lg' : 'text-gray-500 hover:text-gray-700'}`}
          >
            {t.students}
          </button>
          <button 
            onClick={() => setViewMode('teachers')}
            className={`px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 ${viewMode === 'teachers' ? 'bg-white text-indigo-600 shadow-lg' : 'text-gray-500 hover:text-gray-700'}`}
          >
            {t.teachers}
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-4 w-full lg:w-auto items-center">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="text" 
              placeholder={viewMode === 'students' ? t.searchStudent : t.searchTeacher}
              className="w-full pl-14 pr-6 py-4 bg-white rounded-[1.5rem] border-2 border-gray-50 shadow-inner focus:outline-none focus:ring-4 focus:ring-indigo-500/10 transition-all font-medium"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <button 
            onClick={() => { setEditingItem(null); setPreviewImage(null); setIsModalOpen(true); }}
            className="w-full md:w-auto bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-[1.5rem] font-bold flex items-center justify-center gap-3 transition-all active:scale-95 shadow-xl shadow-indigo-200 group"
          >
            <Plus size={22} className="group-hover:rotate-90 transition-transform duration-300" />
            <span>{t.addNew}</span>
          </button>
        </div>
      </div>

      {/* Content Grid */}
      <main className="px-6 md:px-12 pb-24 mt-4">
        {viewMode === 'home' && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12"
          >
            <FeatureCard 
              icon={<Users className="text-indigo-600" size={32}/>} 
              title={lang === 'bn' ? 'দক্ষ শিক্ষার্থী' : 'Skilled Students'}
              desc={lang === 'bn' ? 'আমাদের শিক্ষার্থীরা আধুনিক প্রযুক্তিতে পারদর্শী।' : 'Our students are proficient in modern technology.'}
            />
            <FeatureCard 
              icon={<GraduationCap className="text-indigo-600" size={32}/>} 
              title={lang === 'bn' ? 'অভিজ্ঞ শিক্ষক' : 'Expert Faculty'}
              desc={lang === 'bn' ? 'সেরা শিক্ষকদের তত্ত্বাবধানে উন্নত শিক্ষা।' : 'Advanced education under the supervision of top teachers.'}
            />
            <FeatureCard 
              icon={<BookOpen className="text-indigo-600" size={32}/>} 
              title={lang === 'bn' ? 'কারিগরি কোর্স' : 'Technical Courses'}
              desc={lang === 'bn' ? 'চাহিদা সম্পন্ন বাস্তবধর্মী পাঠ্যক্রম।' : 'Practical curriculum with high demand.'}
            />
            
            <div className="md:col-span-3 bg-white p-12 rounded-[3rem] shadow-sm border border-gray-100 flex flex-col md:flex-row items-center gap-12 mt-12">
               <div className="w-full md:w-1/2">
                 <img 
                  src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=600&h=400" 
                  alt="Lab" 
                  className="rounded-[2.5rem] shadow-2xl" 
                  referrerPolicy="no-referrer"
                 />
               </div>
               <div className="w-full md:w-1/2 space-y-6">
                 <h2 className="text-3xl font-display font-bold text-gray-900">{lang === 'bn' ? 'আমাদের ল্যাবরেটরি সুবিধা' : 'Our Laboratory Facilities'}</h2>
                 <p className="text-gray-500 leading-relaxed text-lg">
                   {lang === 'bn' 
                    ? 'তথ্য প্রযুক্তির এই যুগে শিক্ষার্থীদের হাতে কলমে প্রশিক্ষণের জন্য আমাদের রয়েছে অত্যাধুনিক কম্পিউটার ল্যাব, ইলেকট্রনিক্স ল্যাব এবং পাওয়ার ল্যাব। প্রতিটি ল্যাব সর্বাধুনিক যন্ত্রপাতিতে সুসজ্জিত।'
                    : 'In this era of information technology, we have state-of-the-art computer labs, electronics labs, and power labs for hands-on training of students. Each lab is well-equipped with the latest machinery.'}
                 </p>
                 <button 
                  onClick={() => setViewMode('students')}
                  className="px-8 py-4 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-lg"
                 >
                   {lang === 'bn' ? 'শিক্ষার্থী তালিকা দেখুন' : 'View Student List'}
                 </button>
               </div>
            </div>
          </motion.div>
        )}

        {viewMode === 'about' && (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-5xl mx-auto py-12"
          >
            <div className="bg-white rounded-[3.5rem] overflow-hidden shadow-sm border border-gray-100">
               <div className="h-64 bg-indigo-600 relative flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 opacity-10">
                     {[...Array(20)].map((_, i) => (
                       <GraduationCap key={i} size={80} className="absolute rotate-12" style={{ left: `${Math.random()*100}%`, top: `${Math.random()*100}%` }} />
                     ))}
                  </div>
                  <h2 className="text-5xl font-display font-black text-white relative z-10">{t.aboutTitle}</h2>
               </div>
               
               <div className="p-12 md:p-20 space-y-16">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                     <div className="space-y-8">
                        <div className="w-20 h-2 bg-indigo-600 rounded-full" />
                        <h3 className="text-3xl font-display font-bold text-gray-900 leading-tight">
                           {lang === 'bn' ? 'শিক্ষাই শক্তি, কারিগরি শিক্ষাই মুক্তি' : 'Education is Power, Technical Education is Freedom'}
                        </h3>
                        <p className="text-gray-500 text-lg leading-relaxed font-medium">
                           {t.aboutParagraph}
                        </p>
                     </div>
                     <div className="bg-indigo-50 p-10 rounded-[3rem] space-y-8">
                        <div className="flex items-center gap-6">
                           <div className="w-20 h-20 bg-white rounded-[2rem] flex items-center justify-center text-indigo-600 shadow-sm overflow-hidden">
                              <span className="text-3xl font-black">T</span>
                           </div>
                           <div>
                              <p className="text-xs font-black text-indigo-300 uppercase tracking-widest mb-1">{t.authorInfo}</p>
                              <h4 className="text-2xl font-bold text-gray-900">Tarek Rohman</h4>
                           </div>
                        </div>
                        
                        <div className="space-y-4">
                           <div className="flex items-center gap-4 text-gray-600 bg-white/50 p-4 rounded-2xl">
                              <Globe size={20} className="text-indigo-400" />
                              <span className="font-bold">Admin & Developer</span>
                           </div>
                           <div className="flex items-center gap-4 text-gray-600 bg-white/50 p-4 rounded-2xl">
                              <LogIn size={20} className="text-indigo-400" />
                              <span className="font-bold">Diploma Hub Management</span>
                           </div>
                           <div className="flex items-center gap-4 p-4 rounded-2xl bg-indigo-600 text-white shadow-xl shadow-indigo-100">
                              <Info size={20} />
                              <div className="flex flex-col">
                                <span className="text-[10px] font-black uppercase tracking-widest opacity-70">{t.contactEmail}</span>
                                <span className="font-bold">tarekrohman2860@gmail.com</span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  
                  <div className="pt-12 border-t border-gray-100 grid grid-cols-2 md:grid-cols-4 gap-8">
                     <AboutStat label="Students" value="1200+" />
                     <AboutStat label="Teachers" value="45+" />
                     <AboutStat label="Labs" value="12" />
                     <AboutStat label="Established" value="2020" />
                  </div>
               </div>
            </div>
          </motion.div>
        )}

        {viewMode === 'dashboard' && user && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto py-12"
          >
            <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-gray-100">
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-8 flex items-center gap-3">
                <LayoutDashboard className="text-indigo-600"/> {t.settings}
              </h2>
              
              <div className="space-y-8">
                 <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">{t.changeName}</label>
                    <input 
                      value={settings.collegeName}
                      onChange={(e) => setSettings(prev => ({ ...prev, collegeName: e.target.value }))}
                      className="w-full px-5 py-4 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-indigo-500/20 font-medium"
                    />
                 </div>
                 
                 <div className="space-y-4">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">{t.changeLogo}</label>
                    <div className="flex items-center gap-6 p-6 bg-gray-50 rounded-[2rem]">
                      <div className="w-20 h-20 rounded-2xl bg-white border border-gray-100 flex items-center justify-center overflow-hidden shadow-sm">
                        {settings.collegeLogo ? (
                          <img src={settings.collegeLogo} alt="Logo Preview" className="w-full h-full object-contain" />
                        ) : (
                          <GraduationCap size={32} className="text-gray-200" />
                        )}
                      </div>
                      <div className="flex-1">
                        <button 
                          onClick={() => {
                            const input = document.createElement('input');
                            input.type = 'file';
                            input.accept = 'image/*';
                            input.onchange = (e) => handleSettingsFileChange(e as any, 'logo');
                            input.click();
                          }}
                          className="flex items-center gap-2 px-6 py-3 bg-white text-indigo-600 rounded-xl font-bold border border-indigo-100 hover:bg-indigo-50 transition-all text-sm"
                        >
                          <FileUp size={18} />
                          {t.fromFile}
                        </button>
                      </div>
                    </div>
                 </div>

                 <div className="space-y-4">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">{t.changeHeroBg}</label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {[0, 1, 2].map((idx) => (
                        <div key={idx} className="flex flex-col gap-3 group">
                          <div className="aspect-video rounded-2xl bg-gray-100 overflow-hidden relative border border-gray-100">
                             {settings.heroImages[idx] ? (
                               <img src={settings.heroImages[idx]} alt="Hero Preview" className="w-full h-full object-cover" />
                             ) : (
                               <div className="w-full h-full flex items-center justify-center text-gray-300">
                                 <BookOpen size={24} strokeWidth={1} />
                               </div>
                             )}
                             <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                             <button 
                               onClick={() => {
                                 const input = document.createElement('input');
                                 input.type = 'file';
                                 input.accept = 'image/*';
                                 input.onchange = (e) => handleSettingsFileChange(e as any, 'hero', idx);
                                 input.click();
                               }}
                               className="absolute bottom-3 right-3 p-2 bg-white/90 backdrop-blur-md rounded-lg text-indigo-600 shadow-xl opacity-0 group-hover:opacity-100 transition-all scale-90 group-hover:scale-100"
                             >
                               <FileUp size={16} />
                             </button>
                          </div>
                          <span className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.2em] text-center">
                            {t.heroImageLabel} {idx + 1}
                          </span>
                        </div>
                      ))}
                    </div>
                 </div>

                 <div className="pt-4">
                    <div className="p-6 bg-indigo-50 rounded-3xl flex items-center gap-4">
                       <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-indigo-600 shadow-sm">
                          <Info size={24}/>
                       </div>
                       <p className="text-indigo-950 font-medium leading-tight">আপনার দেয়া তথ্যগুলো ব্রাউজারে সংরক্ষিত থাকবে। পেজ রিফ্রেশ দিলেও এগুলো হারিয়ে যাবে না।</p>
                    </div>
                 </div>

                 <button 
                  onClick={() => setViewMode('home')}
                  className="w-full py-5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-bold transition-all shadow-2xl shadow-indigo-200 text-lg active:scale-95"
                 >
                   {t.saveSettings}
                 </button>
              </div>
            </div>
          </motion.div>
        )}

        {viewMode === 'students' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            <AnimatePresence mode="popLayout">
              {filteredStudents.map((student) => (
                <Card 
                  key={student.id}
                  item={student}
                  type="student"
                  onDelete={() => handleDelete(student.id, 'students')}
                  onEdit={() => handleEdit(student)}
                  onView={() => handleOpenDetail(student)}
                  lang={lang}
                />
              ))}
            </AnimatePresence>
            {filteredStudents.length === 0 && <EmptyState text={t.noResults} />}
          </div>
        )}

        {viewMode === 'teachers' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            <AnimatePresence mode="popLayout">
              {filteredTeachers.map((teacher) => (
                <Card 
                  key={teacher.id}
                  item={teacher}
                  type="teacher"
                  onDelete={() => handleDelete(teacher.id, 'teachers')}
                  onEdit={() => handleEdit(teacher)}
                  onView={() => handleOpenDetail(teacher)}
                  lang={lang}
                />
              ))}
            </AnimatePresence>
            {filteredTeachers.length === 0 && <EmptyState text={t.noResults} />}
          </div>
        )}
      </main>

      {/* Login Modal */}
      <Modal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} title={t.loginTitle}>
        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">{t.name}</label>
            <input 
              required
              name="name"
              placeholder={t.enterName}
              className="w-full px-5 py-4 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-indigo-500/20 font-medium"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">{t.email}</label>
            <input 
              required
              type="email"
              name="email"
              placeholder={t.enterEmail}
              className="w-full px-5 py-4 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-indigo-500/20 font-medium"
            />
          </div>
          <button 
            type="submit"
            className="w-full py-5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-bold transition-all shadow-2xl shadow-indigo-200 text-lg active:scale-95"
          >
            {t.login}
          </button>
        </form>
      </Modal>

      {/* Form Modal */}
      <Modal isOpen={isModalOpen} onClose={() => { setIsModalOpen(false); stopCamera(); }} title={editingItem ? t.editInfo : t.addNew}>
        <form onSubmit={handleSave} className="space-y-6">
          {/* Image Upload Area */}
          <div className="space-y-4">
            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">{t.imageUpload}</label>
            
            <div className="flex flex-col gap-4">
              {/* Preview or Camera */}
              <div className="relative w-full aspect-square md:aspect-video bg-gray-100 rounded-2xl overflow-hidden flex items-center justify-center border-2 border-dashed border-gray-200">
                {isCameraActive ? (
                  <video 
                    ref={videoRef} 
                    autoPlay 
                    playsInline 
                    className="w-full h-full object-cover -scale-x-100"
                  />
                ) : previewImage ? (
                  <img src={previewImage} alt="Preview" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                ) : (
                  <div className="text-gray-400 flex flex-col items-center gap-2">
                    <Camera size={48} strokeWidth={1} />
                    <p className="text-sm">{t.imageUpload}</p>
                  </div>
                )}
                
                {previewImage && !isCameraActive && (
                  <button 
                    type="button"
                    onClick={() => setPreviewImage(null)}
                    className="absolute top-4 right-4 bg-white/80 p-2 rounded-full text-red-500 hover:bg-white transition-colors"
                  >
                    <X size={18} />
                  </button>
                )}
              </div>

              {/* Upload Options */}
              <div className="grid grid-cols-2 gap-3">
                <button 
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="flex items-center justify-center gap-2 py-3 bg-indigo-50 text-indigo-600 rounded-xl font-bold hover:bg-indigo-100 transition-colors text-sm"
                >
                  <FileUp size={18} />
                  {t.fromFile}
                </button>
                <input 
                  type="file" 
                  ref={fileInputRef} 
                  className="hidden" 
                  accept="image/*"
                  onChange={handleFileChange}
                  name="imageFile"
                />
                
                {!isCameraActive ? (
                  <button 
                    type="button"
                    onClick={startCamera}
                    className="flex items-center justify-center gap-2 py-3 bg-gray-50 text-gray-600 rounded-xl font-bold hover:bg-gray-100 transition-colors text-sm"
                  >
                    <Camera size={18} />
                    {t.fromCamera}
                  </button>
                ) : (
                  <button 
                    type="button"
                    onClick={capturePhoto}
                    className="flex items-center justify-center gap-2 py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-colors text-sm"
                  >
                    <RefreshCw size={18} />
                    {t.capture}
                  </button>
                )}
              </div>

              {/* Manual URL Input (Fallback) */}
              <div className="relative">
                <input 
                  name="imageUrl"
                  placeholder={t.imageUrlLabel}
                  defaultValue={editingItem?.imageUrl}
                  className="w-full pl-4 pr-4 py-3 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-indigo-500/20 text-xs text-gray-500"
                />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">{t.name}</label>
            <input 
              required
              name="name"
              placeholder={t.name}
              defaultValue={editingItem?.name}
              className="w-full px-5 py-4 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-indigo-500/20 font-medium"
            />
          </div>

          {viewMode === 'students' ? (
            <>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">{t.roll}</label>
                  <input 
                    required
                    name="roll"
                    placeholder="D-0000"
                    defaultValue={(editingItem as Student)?.roll}
                    className="w-full px-5 py-4 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-indigo-500/20 font-medium"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">{t.shift}</label>
                  <select 
                    name="shift"
                    defaultValue={(editingItem as Student)?.shift || 'First'}
                    className="w-full px-5 py-4 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-indigo-500/20 font-medium"
                  >
                    <option value="First">{t.firstShift}</option>
                    <option value="Second">{t.secondShift}</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">{t.semester}</label>
                <select 
                  name="semester"
                  defaultValue={(editingItem as Student)?.semester || '1st'}
                  className="w-full px-5 py-4 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-indigo-500/20 font-medium"
                >
                  {[...Array(8)].map((_, i) => (
                    <option key={i+1} value={`${i+1}${['st','nd','rd'][i] || 'th'}`}>
                      {lang === 'bn' ? `${i+1}ম সেমিস্টার` : `${i+1}${['st','nd','rd'][i] || 'th'} Semester`}
                    </option>
                  ))}
                </select>
              </div>
            </>
          ) : (
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">{t.department}</label>
              <input 
                required
                name="department"
                placeholder={t.department}
                defaultValue={(editingItem as Teacher)?.department}
                className="w-full px-5 py-4 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-indigo-500/20 font-medium"
              />
            </div>
          )}
          <button 
            type="submit"
            className="w-full py-5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-bold transition-all shadow-2xl shadow-indigo-200 text-lg active:scale-95"
          >
            {t.save}
          </button>
        </form>
        <canvas ref={canvasRef} className="hidden" />
      </Modal>

      {/* Detail Modal */}
      <AnimatePresence>
        {isDetailOpen && selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6 lg:p-24">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsDetailOpen(false)}
              className="absolute inset-0 bg-indigo-950/70 backdrop-blur-md"
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              className="relative w-full max-w-4xl bg-white rounded-[3.5rem] overflow-hidden shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] flex flex-col md:flex-row h-full md:h-auto max-h-[90vh]"
            >
              <div className="w-full md:w-[45%] h-80 md:h-auto overflow-hidden relative">
                <img 
                  src={(selectedItem as any).imageUrl} 
                  alt={selectedItem.name}
                  className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
              </div>
              <div className="w-full md:w-[55%] p-10 lg:p-16 flex flex-col justify-center relative bg-white">
                <button 
                  onClick={() => setIsDetailOpen(false)}
                  className="absolute top-8 right-8 p-3 rounded-full hover:bg-gray-100 transition-colors text-gray-400"
                >
                  <X size={24} />
                </button>
                <span className="text-indigo-600 font-bold uppercase tracking-[0.2em] text-xs mb-4">
                  {('roll' in selectedItem) ? t.profileStudent : t.profileTeacher}
                </span>
                <h2 className="text-4xl lg:text-5xl font-display font-black text-gray-900 mb-10 leading-tight">{selectedItem.name}</h2>
                
                <div className="space-y-8">
                  {('roll' in selectedItem) ? (
                    <>
                      <DetailRow icon={<LayoutDashboard size={22}/>} label={t.roll} value={(selectedItem as Student).roll} />
                      <DetailRow icon={<ChevronRight size={22}/>} label={t.shift} value={(selectedItem as Student).shift + (lang === 'bn' ? ' শিফট' : ' Shift')} />
                      <DetailRow icon={<BookOpen size={22}/>} label={t.semester} value={(selectedItem as Student).semester} />
                    </>
                  ) : (
                    <DetailRow icon={<BookOpen size={22}/>} label={t.department} value={(selectedItem as Teacher).department} />
                  )}
                </div>
                
                <div className="mt-16 flex flex-col sm:flex-row gap-5">
                  <button 
                    onClick={() => { setIsDetailOpen(false); handleEdit(selectedItem); }}
                    className="flex-1 py-5 bg-indigo-600 hover:bg-indigo-700 rounded-2xl font-bold text-white flex items-center justify-center gap-3 transition-all active:scale-95 shadow-lg shadow-indigo-200"
                  >
                    <Edit3 size={20} />
                    {t.edit}
                  </button>
                  <button 
                    onClick={() => { setIsDetailOpen(false); handleDelete(selectedItem.id, 'roll' in selectedItem ? 'students' : 'teachers'); }}
                    className="flex-1 py-5 bg-red-50 hover:bg-red-100 text-red-600 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all active:scale-95 border border-red-100"
                  >
                    <Trash2 size={20} />
                    {t.delete}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      
      {/* Delete Confirmation Modal */}
      <Modal 
        isOpen={!!deleteConfirm} 
        onClose={() => setDeleteConfirm(null)} 
        title={lang === 'bn' ? 'মুছে ফেলতে চান?' : 'Confirm Delete'}
      >
        <div className="space-y-8">
          <div className="p-8 bg-red-50 rounded-3xl border border-red-100 flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-red-500 shadow-sm mb-6">
              <Trash2 size={40} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {lang === 'bn' ? 'আপনি কি নিশ্চিত?' : 'Are you sure?'}
            </h3>
            <p className="text-gray-500 leading-relaxed max-w-xs">
              {lang === 'bn' ? 'এই ডাটাটি স্থায়ীভাবে মুছে ফেলা হবে এবং এটি আর ফিরে পাওয়া যাবে না।' : 'This data will be permanently deleted and cannot be recovered.'}
            </p>
          </div>
          
          <div className="flex gap-4">
            <button 
              onClick={() => setDeleteConfirm(null)}
              className="flex-1 py-5 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-2xl font-bold transition-all"
            >
              {lang === 'bn' ? 'না, থাক' : 'Cancel'}
            </button>
            <button 
              onClick={confirmDelete}
              className="flex-1 py-5 bg-red-600 hover:bg-red-700 text-white rounded-2xl font-bold transition-all shadow-xl shadow-red-100 active:scale-95"
            >
              {lang === 'bn' ? 'হ্যাঁ, মুছে ফেলুন' : 'Yes, Delete'}
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

// Sub-components
interface CardProps {
  key?: React.Key;
  item: any;
  type: 'student' | 'teacher';
  onDelete: () => void;
  onEdit: () => void;
  onView: () => void;
  lang: Language;
}

function Card({ item, type, onDelete, onEdit, onView, lang }: CardProps) {
  const t = translations[lang];
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group border border-gray-100 flex flex-col cursor-pointer"
      onClick={onView}
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={item.imageUrl} 
          alt={item.name} 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
        
        {/* Actions Overlay */}
        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
          <button 
            onClick={(e) => { e.stopPropagation(); onEdit(); }}
            className="p-3 bg-white shadow-lg rounded-xl text-indigo-600 hover:bg-indigo-50 transition-all active:scale-90"
            title={lang === 'bn' ? 'সম্পাদনা' : 'Edit'}
          >
            <Edit3 size={18} />
          </button>
          <button 
            onClick={(e) => { e.stopPropagation(); onDelete(); }}
            className="p-3 bg-white shadow-lg rounded-xl text-red-600 hover:bg-red-50 transition-all active:scale-90"
            title={lang === 'bn' ? 'মুছে ফেলুন' : 'Delete'}
          >
            <Trash2 size={18} />
          </button>
        </div>
        
        <div className="absolute bottom-5 left-5">
           <span className="px-4 py-2 bg-indigo-600/80 backdrop-blur-md rounded-full text-[10px] font-black text-white uppercase tracking-[0.2em] border border-white/20">
             {type === 'student' ? item.semester : (lang === 'bn' ? 'আচার্য' : 'FACULTY')}
           </span>
        </div>
      </div>
      
      <div className="p-8 flex flex-col flex-1">
        <h3 className="text-xl font-display font-bold text-gray-900 group-hover:text-indigo-600 transition-colors mb-2 leading-tight">{item.name}</h3>
        <p className="text-sm text-gray-400 font-bold uppercase tracking-widest mb-6">
          {type === 'student' ? `${t.shift}: ${item.shift}` : item.department}
        </p>
        
        <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
              {type === 'student' ? <GraduationCap size={20}/> : <Users size={20}/>}
            </div>
            <span className="text-xs font-black text-gray-300 group-hover:text-gray-500 transition-colors">
              {type === 'student' ? item.roll : (lang === 'bn' ? 'অভিজ্ঞ শিক্ষক' : 'EXPERIENCED')}
            </span>
          </div>
          <button className="text-indigo-500 opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0 duration-500">
            <Info size={22} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

function Modal({ isOpen, onClose, title, children }: ModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-indigo-950/40 backdrop-blur-md"
          />
          <motion.div 
            initial={{ scale: 0.95, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 30 }}
            className="relative w-full max-w-xl bg-white rounded-[3rem] p-10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.25)] my-8"
          >
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-3xl font-display font-black text-gray-900">{title}</h2>
              <button 
                onClick={onClose}
                className="p-3 rounded-full hover:bg-gray-100 transition-colors text-gray-300"
              >
                <X size={24} />
              </button>
            </div>
            {children}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

interface DetailRowProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

function DetailRow({ icon, label, value }: DetailRowProps) {
  return (
    <div className="flex items-center gap-6 group">
      <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500 shadow-sm">
        {icon}
      </div>
      <div>
        <p className="text-[10px] font-black text-gray-300 uppercase tracking-[0.2em] mb-1">{label}</p>
        <p className="text-gray-900 font-bold text-lg">{value}</p>
      </div>
    </div>
  );
}

function EmptyState({ text }: { text: string }) {
  return (
    <div className="col-span-full py-32 flex flex-col items-center justify-center text-gray-300 border-4 border-dashed border-gray-50 rounded-[4rem]">
      <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mb-6">
        <Search size={40} className="text-gray-200" />
      </div>
      <p className="text-xl font-bold tracking-tight">{text}</p>
    </div>
  );
}

function AboutStat({ label, value }: { label: string, value: string }) {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-3xl">
      <p className="text-3xl font-display font-black text-indigo-600 mb-1">{value}</p>
      <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{label}</p>
    </div>
  );
}

function FeatureCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-gray-50 hover:shadow-xl transition-all duration-500 group">
      <div className="w-16 h-16 bg-indigo-50 rounded-[1.5rem] flex items-center justify-center mb-8 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-500">
        {icon}
      </div>
      <h3 className="text-xl font-display font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-500 leading-relaxed">{desc}</p>
    </div>
  );
}
