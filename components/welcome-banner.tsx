import Image from "next/image";

export function WelcomeBanner() {
  return (
    <div className="relative w-full overflow-hidden mb-12 md:mb-16">
      {/* Animated flowing gradient background */}
      <div className="relative rounded-3xl md:rounded-[2rem] p-6 md:p-8 lg:p-6 xl:p-8 border-2 border-light-sage/50 dark:border-sage/30 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] overflow-hidden">
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#F5F5DC]/60 via-[#FAF0E6]/50 to-[#F5E6D3]/60 dark:from-[#F5E6D3]/40 dark:via-[#FAF0E6]/30 dark:to-[#F5F5DC]/40" />
        <div 
          className="absolute inset-0 opacity-40 dark:opacity-25 animate-gradient-flow"
          style={{
            background: 'linear-gradient(45deg, #F5F5DC, #FAF0E6, #F5E6D3, #F5F5DC, #FAF0E6)',
          }}
        />
        
        {/* Decorative Elements - Banner Images */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Banner element 1 - Top left (larger) */}
          <div className="absolute -top-8 -left-8 w-40 h-40 md:w-56 md:h-56 lg:w-72 lg:h-72 opacity-20 dark:opacity-15 transform -rotate-12">
            <Image
              src="/banner_elements/1.png"
              alt="Декоративен елемент"
              fill
              className="object-contain drop-shadow-lg"
              sizes="(max-width: 768px) 160px, (max-width: 1024px) 224px, 288px"
            />
          </div>

          {/* Banner element 1 - Duplicate bottom right */}
          <div className="absolute bottom-0 right-0 w-32 h-32 md:w-44 md:h-44 lg:w-56 lg:h-56 opacity-15 dark:opacity-12 transform rotate-12">
            <Image
              src="/banner_elements/1.png"
              alt="Декоративен елемент"
              fill
              className="object-contain drop-shadow-md"
              sizes="(max-width: 768px) 128px, (max-width: 1024px) 176px, 224px"
            />
          </div>

          {/* Banner element 2 - Top right (larger) */}
          <div className="absolute -top-6 -right-6 w-44 h-44 md:w-60 md:h-60 lg:w-80 lg:h-80 opacity-20 dark:opacity-15 transform rotate-12">
            <Image
              src="/banner_elements/2.png"
              alt="Декоративен елемент"
              fill
              className="object-contain drop-shadow-lg"
              sizes="(max-width: 768px) 176px, (max-width: 1024px) 240px, 320px"
            />
          </div>

          {/* Banner element 2 - Duplicate middle left */}
          <div className="absolute top-1/3 -left-4 w-28 h-28 md:w-40 md:h-40 lg:w-52 lg:h-52 opacity-15 dark:opacity-12 transform -rotate-6">
            <Image
              src="/banner_elements/2.png"
              alt="Декоративен елемент"
              fill
              className="object-contain drop-shadow-md"
              sizes="(max-width: 768px) 112px, (max-width: 1024px) 160px, 208px"
            />
          </div>

          {/* Banner element 3 - Bottom left (larger) */}
          <div className="absolute -bottom-8 left-0 w-36 h-36 md:w-52 md:h-52 lg:w-68 lg:h-68 opacity-20 dark:opacity-15 transform rotate-6">
            <Image
              src="/banner_elements/3.png"
              alt="Декоративен елемент"
              fill
              className="object-contain drop-shadow-lg"
              sizes="(max-width: 768px) 144px, (max-width: 1024px) 208px, 272px"
            />
          </div>

          {/* Banner element 3 - Duplicate top center - hidden behind logo */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-24 md:w-36 md:h-36 lg:w-48 lg:h-48 opacity-0 pointer-events-none transform -rotate-12">
            <Image
              src="/banner_elements/3.png"
              alt="Декоративен елемент"
              fill
              className="object-contain drop-shadow-md"
              sizes="(max-width: 768px) 96px, (max-width: 1024px) 144px, 192px"
            />
          </div>

          {/* Banner element 3 - Duplicate right middle */}
          <div className="absolute top-1/2 right-1/4 w-20 h-20 md:w-32 md:h-32 lg:w-40 lg:h-40 opacity-12 dark:opacity-10 transform rotate-18">
            <Image
              src="/banner_elements/3.png"
              alt="Декоративен елемент"
              fill
              className="object-contain drop-shadow-md"
              sizes="(max-width: 768px) 80px, (max-width: 1024px) 128px, 160px"
            />
          </div>

          {/* More banner element duplicates - scattered everywhere - hidden behind logo */}
          <div className="absolute top-1/6 left-1/6 w-24 h-24 md:w-36 md:h-36 lg:w-44 lg:h-44 opacity-0 pointer-events-none transform rotate-24">
            <Image
              src="/banner_elements/1.png"
              alt="Декоративен елемент"
              fill
              className="object-contain drop-shadow-md"
              sizes="(max-width: 768px) 96px, (max-width: 1024px) 144px, 176px"
            />
          </div>
          <div className="absolute bottom-1/6 right-1/6 w-28 h-28 md:w-40 md:h-40 lg:w-48 lg:h-48 opacity-10 dark:opacity-8 transform -rotate-18">
            <Image
              src="/banner_elements/2.png"
              alt="Декоративен елемент"
              fill
              className="object-contain drop-shadow-md"
              sizes="(max-width: 768px) 112px, (max-width: 1024px) 160px, 192px"
            />
          </div>
          <div className="absolute top-2/3 left-1/2 w-20 h-20 md:w-32 md:h-32 lg:w-40 lg:h-40 opacity-0 pointer-events-none transform rotate-30">
            <Image
              src="/banner_elements/3.png"
              alt="Декоративен елемент"
              fill
              className="object-contain drop-shadow-md"
              sizes="(max-width: 768px) 80px, (max-width: 1024px) 128px, 160px"
            />
          </div>
          <div className="absolute top-1/4 right-1/5 w-22 h-22 md:w-34 md:h-34 lg:w-42 lg:h-42 opacity-0 pointer-events-none transform -rotate-24">
            <Image
              src="/banner_elements/1.png"
              alt="Декоративен елемент"
              fill
              className="object-contain drop-shadow-md"
              sizes="(max-width: 768px) 88px, (max-width: 1024px) 136px, 168px"
            />
          </div>
          <div className="absolute bottom-1/3 left-1/5 w-26 h-26 md:w-38 md:h-38 lg:w-46 lg:h-46 opacity-12 dark:opacity-10 transform rotate-15">
            <Image
              src="/banner_elements/2.png"
              alt="Декоративен елемент"
              fill
              className="object-contain drop-shadow-md"
              sizes="(max-width: 768px) 104px, (max-width: 1024px) 152px, 184px"
            />
          </div>
          <div className="absolute top-3/4 right-1/3 w-18 h-18 md:w-30 md:h-30 lg:w-38 lg:h-38 opacity-10 dark:opacity-8 transform -rotate-20">
            <Image
              src="/banner_elements/3.png"
              alt="Декоративен елемент"
              fill
              className="object-contain drop-shadow-md"
              sizes="(max-width: 768px) 72px, (max-width: 1024px) 120px, 152px"
            />
          </div>

          {/* Additional images in side areas only - not behind logo or text */}
          <div className="absolute top-1/8 left-0 w-24 h-24 md:w-36 md:h-36 lg:w-44 lg:h-44 opacity-12 dark:opacity-10 transform -rotate-15">
            <Image
              src="/banner_elements/1.png"
              alt="Декоративен елемент"
              fill
              className="object-contain drop-shadow-md"
              sizes="(max-width: 768px) 96px, (max-width: 1024px) 144px, 176px"
            />
          </div>
          <div className="absolute top-1/8 right-0 w-28 h-28 md:w-40 md:h-40 lg:w-48 lg:h-48 opacity-12 dark:opacity-10 transform rotate-15">
            <Image
              src="/banner_elements/2.png"
              alt="Декоративен елемент"
              fill
              className="object-contain drop-shadow-md"
              sizes="(max-width: 768px) 112px, (max-width: 1024px) 160px, 192px"
            />
          </div>
          <div className="absolute bottom-1/8 left-0 w-26 h-26 md:w-38 md:h-38 lg:w-46 lg:h-46 opacity-10 dark:opacity-8 transform rotate-20">
            <Image
              src="/banner_elements/3.png"
              alt="Декоративен елемент"
              fill
              className="object-contain drop-shadow-md"
              sizes="(max-width: 768px) 104px, (max-width: 1024px) 152px, 184px"
            />
          </div>
          <div className="absolute bottom-1/8 right-0 w-22 h-22 md:w-34 md:h-34 lg:w-42 lg:h-42 opacity-10 dark:opacity-8 transform -rotate-20">
            <Image
              src="/banner_elements/1.png"
              alt="Декоративен елемент"
              fill
              className="object-contain drop-shadow-md"
              sizes="(max-width: 768px) 88px, (max-width: 1024px) 136px, 168px"
            />
          </div>
          <div className="absolute top-1/5 left-1/10 w-20 h-20 md:w-32 md:h-32 lg:w-40 lg:h-40 opacity-10 dark:opacity-8 transform rotate-25">
            <Image
              src="/banner_elements/2.png"
              alt="Декоративен елемент"
              fill
              className="object-contain drop-shadow-md"
              sizes="(max-width: 768px) 80px, (max-width: 1024px) 128px, 160px"
            />
          </div>
          <div className="absolute top-1/5 right-1/10 w-20 h-20 md:w-32 md:h-32 lg:w-40 lg:h-40 opacity-10 dark:opacity-8 transform -rotate-25">
            <Image
              src="/banner_elements/3.png"
              alt="Декоративен елемент"
              fill
              className="object-contain drop-shadow-md"
              sizes="(max-width: 768px) 80px, (max-width: 1024px) 128px, 160px"
            />
          </div>
          <div className="absolute bottom-1/5 left-1/10 w-24 h-24 md:w-36 md:h-36 lg:w-44 lg:h-44 opacity-10 dark:opacity-8 transform -rotate-18">
            <Image
              src="/banner_elements/1.png"
              alt="Декоративен елемент"
              fill
              className="object-contain drop-shadow-md"
              sizes="(max-width: 768px) 96px, (max-width: 1024px) 144px, 176px"
            />
          </div>
          <div className="absolute bottom-1/5 right-1/10 w-24 h-24 md:w-36 md:h-36 lg:w-44 lg:h-44 opacity-10 dark:opacity-8 transform rotate-18">
            <Image
              src="/banner_elements/2.png"
              alt="Декоративен елемент"
              fill
              className="object-contain drop-shadow-md"
              sizes="(max-width: 768px) 96px, (max-width: 1024px) 144px, 176px"
            />
          </div>
          <div className="absolute top-4/5 left-1/8 w-18 h-18 md:w-30 md:h-30 lg:w-38 lg:h-38 opacity-8 dark:opacity-6 transform rotate-12">
            <Image
              src="/banner_elements/3.png"
              alt="Декоративен елемент"
              fill
              className="object-contain drop-shadow-md"
              sizes="(max-width: 768px) 72px, (max-width: 1024px) 120px, 152px"
            />
          </div>
          <div className="absolute top-4/5 right-1/8 w-18 h-18 md:w-30 md:h-30 lg:w-38 lg:h-38 opacity-8 dark:opacity-6 transform -rotate-12">
            <Image
              src="/banner_elements/1.png"
              alt="Декоративен елемент"
              fill
              className="object-contain drop-shadow-md"
              sizes="(max-width: 768px) 72px, (max-width: 1024px) 120px, 152px"
            />
          </div>

          {/* Many more background gradient circles */}
          <div className="absolute top-1/4 left-1/3 w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-full bg-mustard/10 dark:bg-mustard/5 blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
          <div className="absolute bottom-1/4 right-1/3 w-40 h-40 md:w-56 md:h-56 lg:w-72 lg:h-72 rounded-full bg-light-sage/15 dark:bg-sage/10 blur-3xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-0 w-24 h-24 md:w-36 md:h-36 lg:w-48 lg:h-48 rounded-full bg-mustard/8 dark:bg-mustard/4 blur-2xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '0.5s' }} />
          <div className="absolute bottom-0 right-1/4 w-28 h-28 md:w-40 md:h-40 lg:w-52 lg:h-52 rounded-full bg-light-sage/12 dark:bg-sage/8 blur-2xl animate-pulse" style={{ animationDuration: '4.5s', animationDelay: '1.5s' }} />
          <div className="absolute top-1/6 right-0 w-20 h-20 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full bg-mustard/6 dark:bg-mustard/3 blur-2xl animate-pulse" style={{ animationDuration: '5.5s', animationDelay: '0.8s' }} />
          <div className="absolute bottom-1/6 left-1/4 w-36 h-36 md:w-52 md:h-52 lg:w-68 lg:h-68 rounded-full bg-light-sage/10 dark:bg-sage/6 blur-3xl animate-pulse" style={{ animationDuration: '7s', animationDelay: '2s' }} />
          <div className="absolute top-2/3 right-1/2 w-30 h-30 md:w-44 md:h-44 lg:w-58 lg:h-58 rounded-full bg-mustard/7 dark:bg-mustard/3 blur-2xl animate-pulse" style={{ animationDuration: '6.5s', animationDelay: '1.2s' }} />
          <div className="absolute top-0 left-1/5 w-22 h-22 md:w-34 md:h-34 lg:w-46 lg:h-46 rounded-full bg-light-sage/8 dark:bg-sage/5 blur-2xl animate-pulse" style={{ animationDuration: '5.8s', animationDelay: '0.3s' }} />
          <div className="absolute bottom-1/5 right-0 w-26 h-26 md:w-38 md:h-38 lg:w-50 lg:h-50 rounded-full bg-mustard/9 dark:bg-mustard/4 blur-2xl animate-pulse" style={{ animationDuration: '4.8s', animationDelay: '1.8s' }} />
          <div className="absolute top-1/3 left-2/3 w-34 h-34 md:w-50 md:h-50 lg:w-66 lg:h-66 rounded-full bg-light-sage/13 dark:bg-sage/9 blur-3xl animate-pulse" style={{ animationDuration: '6.2s', animationDelay: '0.6s' }} />

          {/* Small floating decorative elements - more of them */}
          <div className="absolute top-1/4 left-1/4 w-4 h-4 md:w-6 md:h-6">
            <div className="w-full h-full rounded-full bg-mustard/30 dark:bg-mustard/40 animate-pulse" />
          </div>
          <div className="absolute top-1/3 right-1/3 w-3 h-3 md:w-5 md:h-5">
            <div className="w-full h-full rounded-full bg-light-sage/50 dark:bg-sage/40 animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>
          <div className="absolute bottom-1/4 left-1/3 w-5 h-5 md:w-7 md:h-7">
            <div className="w-full h-full rounded-full bg-mustard/25 dark:bg-mustard/35 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
          <div className="absolute bottom-1/3 right-1/4 w-4 h-4 md:w-6 md:h-6">
            <div className="w-full h-full rounded-full bg-light-sage/40 dark:bg-sage/30 animate-pulse" style={{ animationDelay: '1.5s' }} />
          </div>
          <div className="absolute top-1/5 right-1/5 w-3 h-3 md:w-5 md:h-5">
            <div className="w-full h-full rounded-full bg-mustard/35 dark:bg-mustard/45 animate-pulse" style={{ animationDelay: '0.3s' }} />
          </div>
          <div className="absolute bottom-1/5 left-1/5 w-4 h-4 md:w-6 md:h-6">
            <div className="w-full h-full rounded-full bg-light-sage/45 dark:bg-sage/35 animate-pulse" style={{ animationDelay: '0.8s' }} />
          </div>
          <div className="absolute top-2/3 left-1/5 w-5 h-5 md:w-7 md:h-7">
            <div className="w-full h-full rounded-full bg-mustard/20 dark:bg-mustard/30 animate-pulse" style={{ animationDelay: '1.2s' }} />
          </div>
          <div className="absolute top-1/2 right-1/5 w-3 h-3 md:w-5 md:h-5">
            <div className="w-full h-full rounded-full bg-light-sage/35 dark:bg-sage/25 animate-pulse" style={{ animationDelay: '1.7s' }} />
          </div>
          <div className="absolute top-1/6 left-2/5 w-4 h-4 md:w-6 md:h-6">
            <div className="w-full h-full rounded-full bg-mustard/28 dark:bg-mustard/38 animate-pulse" style={{ animationDelay: '0.2s' }} />
          </div>
          <div className="absolute bottom-2/5 right-2/5 w-3 h-3 md:w-5 md:h-5">
            <div className="w-full h-full rounded-full bg-light-sage/42 dark:bg-sage/32 animate-pulse" style={{ animationDelay: '0.9s' }} />
          </div>
          <div className="absolute top-3/5 left-3/5 w-5 h-5 md:w-7 md:h-7">
            <div className="w-full h-full rounded-full bg-mustard/22 dark:bg-mustard/32 animate-pulse" style={{ animationDelay: '1.4s' }} />
          </div>
          <div className="absolute bottom-1/6 right-1/6 w-4 h-4 md:w-6 md:h-6">
            <div className="w-full h-full rounded-full bg-light-sage/38 dark:bg-sage/28 animate-pulse" style={{ animationDelay: '0.7s' }} />
          </div>
          <div className="absolute top-4/5 left-1/6 w-3 h-3 md:w-5 md:h-5">
            <div className="w-full h-full rounded-full bg-mustard/32 dark:bg-mustard/42 animate-pulse" style={{ animationDelay: '1.1s' }} />
          </div>
          <div className="absolute top-1/8 right-1/3 w-4 h-4 md:w-6 md:h-6">
            <div className="w-full h-full rounded-full bg-light-sage/40 dark:bg-sage/30 animate-pulse" style={{ animationDelay: '1.6s' }} />
          </div>
          <div className="absolute bottom-3/5 left-4/5 w-5 h-5 md:w-7 md:h-7">
            <div className="w-full h-full rounded-full bg-mustard/18 dark:bg-mustard/28 animate-pulse" style={{ animationDelay: '0.4s' }} />
          </div>
          <div className="absolute top-2/5 left-1/8 w-3 h-3 md:w-5 md:h-5">
            <div className="w-full h-full rounded-full bg-light-sage/36 dark:bg-sage/26 animate-pulse" style={{ animationDelay: '1.3s' }} />
          </div>
          <div className="absolute bottom-1/8 right-2/5 w-4 h-4 md:w-6 md:h-6">
            <div className="w-full h-full rounded-full bg-mustard/30 dark:bg-mustard/40 animate-pulse" style={{ animationDelay: '0.6s' }} />
          </div>

          {/* Many more SVG decorative elements */}
          <div className="absolute top-1/6 right-1/6 w-16 h-16 md:w-24 md:h-24 opacity-20">
            <svg viewBox="0 0 100 100" className="w-full h-full text-mustard">
              <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" />
              <circle cx="50" cy="50" r="25" fill="currentColor" opacity="0.3" />
            </svg>
          </div>
          <div className="absolute bottom-1/6 left-1/6 w-20 h-20 md:w-28 md:h-28 opacity-15">
            <svg viewBox="0 0 100 100" className="w-full h-full text-light-sage dark:text-sage">
              <path d="M50 10 Q90 50 50 90 Q10 50 50 10" fill="none" stroke="currentColor" strokeWidth="2" />
              <circle cx="50" cy="50" r="15" fill="currentColor" opacity="0.2" />
            </svg>
          </div>
          <div className="absolute top-1/3 left-1/3 w-14 h-14 md:w-20 md:h-20 opacity-18">
            <svg viewBox="0 0 100 100" className="w-full h-full text-mustard">
              <path d="M50 10 L90 50 L50 90 L10 50 Z" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="M50 30 L70 50 L50 70 L30 50 Z" fill="currentColor" opacity="0.2" />
            </svg>
          </div>
          <div className="absolute bottom-1/4 right-1/4 w-18 h-18 md:w-26 md:h-26 opacity-16">
            <svg viewBox="0 0 100 100" className="w-full h-full text-light-sage dark:text-sage">
              <path d="M20 20 L80 20 L80 80 L20 80 Z" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="3,3" />
              <circle cx="50" cy="50" r="20" fill="currentColor" opacity="0.25" />
            </svg>
          </div>
          <div className="absolute top-2/3 right-1/5 w-12 h-12 md:w-18 md:h-18 opacity-14">
            <svg viewBox="0 0 100 100" className="w-full h-full text-mustard">
              <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="2" />
              <circle cx="50" cy="50" r="20" fill="currentColor" opacity="0.25" />
            </svg>
          </div>
          <div className="absolute bottom-1/3 left-2/5 w-16 h-16 md:w-22 md:h-22 opacity-17">
            <svg viewBox="0 0 100 100" className="w-full h-full text-light-sage dark:text-sage">
              <path d="M50 5 L95 50 L50 95 L5 50 Z" fill="none" stroke="currentColor" strokeWidth="2" />
              <circle cx="50" cy="50" r="18" fill="currentColor" opacity="0.2" />
            </svg>
          </div>
          <div className="absolute top-1/5 left-4/5 w-10 h-10 md:w-16 md:h-16 opacity-12">
            <svg viewBox="0 0 100 100" className="w-full h-full text-mustard">
              <path d="M50 15 Q85 50 50 85 Q15 50 50 15" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
          <div className="absolute bottom-1/5 right-3/5 w-14 h-14 md:w-20 md:h-20 opacity-15">
            <svg viewBox="0 0 100 100" className="w-full h-full text-light-sage dark:text-sage">
              <rect x="25" y="25" width="50" height="50" fill="none" stroke="currentColor" strokeWidth="2" />
              <circle cx="50" cy="50" r="15" fill="currentColor" opacity="0.2" />
            </svg>
          </div>

          {/* Many more decorative SVG swirls and shapes */}
          <div className="absolute top-1/5 left-1/5 w-12 h-12 md:w-18 md:h-18 opacity-12">
            <svg viewBox="0 0 100 100" className="w-full h-full text-mustard">
              <path d="M50 10 Q70 30 50 50 Q30 70 50 90" fill="none" stroke="currentColor" strokeWidth="2" />
              <circle cx="50" cy="50" r="8" fill="currentColor" opacity="0.2" />
            </svg>
          </div>
          <div className="absolute top-3/5 right-1/4 w-14 h-14 md:w-20 md:h-20 opacity-13">
            <svg viewBox="0 0 100 100" className="w-full h-full text-light-sage dark:text-sage">
              <path d="M20 50 Q50 20 80 50 Q50 80 20 50" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
          <div className="absolute bottom-2/5 left-3/5 w-10 h-10 md:w-16 md:h-16 opacity-11">
            <svg viewBox="0 0 100 100" className="w-full h-full text-mustard">
              <path d="M50 5 L60 40 L95 50 L60 60 L50 95 L40 60 L5 50 L40 40 Z" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
          <div className="absolute top-1/4 right-2/5 w-16 h-16 md:w-22 md:h-22 opacity-14">
            <svg viewBox="0 0 100 100" className="w-full h-full text-light-sage dark:text-sage">
              <path d="M50 10 C70 20 80 40 70 60 C60 80 40 80 30 60 C20 40 30 20 50 10" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
          <div className="absolute bottom-1/4 left-1/4 w-13 h-13 md:w-19 md:h-19 opacity-12">
            <svg viewBox="0 0 100 100" className="w-full h-full text-mustard">
              <path d="M50 10 L90 30 L70 70 L30 70 L10 30 Z" fill="none" stroke="currentColor" strokeWidth="2" />
              <circle cx="50" cy="50" r="12" fill="currentColor" opacity="0.15" />
            </svg>
          </div>
          <div className="absolute top-4/5 right-1/6 w-11 h-11 md:w-17 md:h-17 opacity-10">
            <svg viewBox="0 0 100 100" className="w-full h-full text-light-sage dark:text-sage">
              <path d="M50 15 Q75 25 85 50 Q75 75 50 85 Q25 75 15 50 Q25 25 50 15" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
          <div className="absolute top-1/2 left-1/6 w-15 h-15 md:w-21 md:h-21 opacity-13">
            <svg viewBox="0 0 100 100" className="w-full h-full text-mustard">
              <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4,4" />
              <circle cx="50" cy="50" r="15" fill="currentColor" opacity="0.2" />
            </svg>
          </div>
          <div className="absolute bottom-1/3 right-1/6 w-12 h-12 md:w-18 md:h-18 opacity-11">
            <svg viewBox="0 0 100 100" className="w-full h-full text-light-sage dark:text-sage">
              <path d="M30 30 L70 30 L70 70 L30 70 Z" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="M40 40 L60 40 L60 60 L40 60 Z" fill="currentColor" opacity="0.15" />
            </svg>
          </div>
          <div className="absolute top-2/5 left-4/5 w-9 h-9 md:w-15 md:h-15 opacity-10">
            <svg viewBox="0 0 100 100" className="w-full h-full text-mustard">
              <path d="M50 20 L80 50 L50 80 L20 50 Z" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
          <div className="absolute bottom-1/5 left-2/3 w-14 h-14 md:w-20 md:h-20 opacity-12">
            <svg viewBox="0 0 100 100" className="w-full h-full text-light-sage dark:text-sage">
              <path d="M50 10 L90 50 L50 90 L10 50 Z" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="M50 30 L70 50 L50 70 L30 50 Z" fill="currentColor" opacity="0.18" />
            </svg>
          </div>
          <div className="absolute top-1/6 right-3/5 w-13 h-13 md:w-19 md:h-19 opacity-11">
            <svg viewBox="0 0 100 100" className="w-full h-full text-mustard">
              <path d="M50 5 Q90 30 85 70 Q50 95 15 70 Q10 30 50 5" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
          <div className="absolute bottom-3/5 left-1/5 w-11 h-11 md:w-17 md:h-17 opacity-10">
            <svg viewBox="0 0 100 100" className="w-full h-full text-light-sage dark:text-sage">
              <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="2" />
              <circle cx="50" cy="50" r="10" fill="currentColor" opacity="0.2" />
            </svg>
          </div>
          <div className="absolute top-3/4 left-1/3 w-12 h-12 md:w-18 md:h-18 opacity-12">
            <svg viewBox="0 0 100 100" className="w-full h-full text-mustard">
              <path d="M50 20 L70 40 L50 60 L30 40 Z" fill="none" stroke="currentColor" strokeWidth="2" />
              <circle cx="50" cy="40" r="8" fill="currentColor" opacity="0.2" />
            </svg>
          </div>
          <div className="absolute top-1/3 right-4/5 w-10 h-10 md:w-16 md:h-16 opacity-11">
            <svg viewBox="0 0 100 100" className="w-full h-full text-light-sage dark:text-sage">
              <path d="M50 15 L65 35 L85 40 L70 55 L75 75 L50 65 L25 75 L30 55 L15 40 L35 35 Z" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
          <div className="absolute bottom-1/6 left-1/2 w-13 h-13 md:w-19 md:h-19 opacity-12">
            <svg viewBox="0 0 100 100" className="w-full h-full text-mustard">
              <path d="M50 10 Q80 20 90 50 Q80 80 50 90 Q20 80 10 50 Q20 20 50 10" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
          <div className="absolute top-5/6 right-2/5 w-11 h-11 md:w-17 md:h-17 opacity-10">
            <svg viewBox="0 0 100 100" className="w-full h-full text-light-sage dark:text-sage">
              <rect x="30" y="30" width="40" height="40" rx="5" fill="none" stroke="currentColor" strokeWidth="2" />
              <circle cx="50" cy="50" r="12" fill="currentColor" opacity="0.15" />
            </svg>
          </div>
          <div className="absolute top-2/3 left-2/5 w-14 h-14 md:w-20 md:h-20 opacity-13">
            <svg viewBox="0 0 100 100" className="w-full h-full text-mustard">
              <path d="M50 5 L60 45 L95 50 L60 55 L50 95 L40 55 L5 50 L40 45 Z" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
          <div className="absolute bottom-4/5 right-1/3 w-12 h-12 md:w-18 md:h-18 opacity-11">
            <svg viewBox="0 0 100 100" className="w-full h-full text-light-sage dark:text-sage">
              <path d="M50 20 C70 20 80 40 70 60 C60 80 40 80 30 60 C20 40 30 20 50 20" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
          <div className="absolute top-1/8 left-3/5 w-10 h-10 md:w-16 md:h-16 opacity-10">
            <svg viewBox="0 0 100 100" className="w-full h-full text-mustard">
              <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="3,3" />
              <circle cx="50" cy="50" r="20" fill="currentColor" opacity="0.2" />
            </svg>
          </div>
          <div className="absolute bottom-1/4 right-1/5 w-13 h-13 md:w-19 md:h-19 opacity-12">
            <svg viewBox="0 0 100 100" className="w-full h-full text-light-sage dark:text-sage">
              <path d="M50 10 L70 30 L50 50 L30 30 Z" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="M50 50 L70 70 L50 90 L30 70 Z" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
          <div className="absolute top-4/5 left-4/5 w-11 h-11 md:w-17 md:h-17 opacity-10">
            <svg viewBox="0 0 100 100" className="w-full h-full text-mustard">
              <path d="M50 15 Q75 25 85 50 Q75 75 50 85 Q25 75 15 50 Q25 25 50 15" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
          <div className="absolute bottom-1/2 left-1/8 w-14 h-14 md:w-20 md:h-20 opacity-13">
            <svg viewBox="0 0 100 100" className="w-full h-full text-light-sage dark:text-sage">
              <path d="M50 5 L90 30 L70 70 L30 70 L10 30 Z" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center">
          {/* Logo */}
          <div className="mb-3 md:mb-4 lg:mb-4 relative z-20">
            <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-64 lg:h-64 xl:w-72 xl:h-72 mx-auto">
              <Image
                src="/logo_usmivka_final.png"
                alt="Магазинче за усмивки лого"
                fill
                className="object-contain drop-shadow-lg"
                priority
                sizes="(max-width: 768px) 192px, (max-width: 1024px) 256px, (max-width: 1280px) 320px, 384px"
              />
            </div>
          </div>

          {/* Welcome Text */}
          <div className="max-w-3xl mx-auto space-y-2 md:space-y-3 lg:space-y-3">
            <h1 
              className="text-2xl md:text-3xl lg:text-3xl xl:text-4xl px-4"
              style={{
                color: '#f9a700',
                fontFamily: "'Patrick Hand', 'Fredoka One', cursive",
                fontWeight: 700,
                letterSpacing: '0.05em',
                lineHeight: '1.4',
                fontStyle: 'normal',
              }}
            >
              Добре дошли в Магазинче за усмивки
            </h1>
            <p 
              className="text-base md:text-lg lg:text-lg xl:text-xl leading-relaxed px-4"
              style={{
                color: '#f9a700',
                fontFamily: "'Patrick Hand', 'Fredoka One', cursive",
                fontWeight: 400,
                letterSpacing: '0.04em',
                fontStyle: 'normal',
              }}
            >
              – мястото, където всеки подарък е ръчно изработен с любов. Създаваме малки жестове, които носят големи усмивки за всеки повод и без повод ☺️
            </p>
          </div>

          {/* Decorative line under text */}
          <div className="mt-3 md:mt-4 lg:mt-4 w-24 md:w-32 h-1 bg-gradient-to-r from-transparent via-mustard to-transparent rounded-full" />
        </div>
      </div>
    </div>
  );
}
