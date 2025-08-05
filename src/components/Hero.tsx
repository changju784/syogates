const Hero: React.FC = () => {
    return (
        <section className="bg-purple-600 text-white min-h-screen flex items-center justify-center px-6">
            <div className="max-w-3xl text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                    건강한 움직임의 시작, SYOGATES
                </h1>
                <p className="text-lg md:text-xl mb-8">
                    요가 · 필라테스 · 자이로토닉, 몸과 마음을 위한 공간
                </p>
                <a
                    href="#contact"
                    className="inline-block bg-white text-purple-600 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-gray-100 transition"
                >
                    무료 체험 신청
                </a>
            </div>
        </section>
    );
};

export default Hero;