import Header from "@/components/sections/header";

const About = () => {
  return (
    <>
      <Header className="static" />
      <main>
        <section className="min-h-[calc(100vh-147px)] bg-[#BA1A33] text-white py-10 px-3 flex flex-col gap-10">
          <div>
            <h2 className="text-5xl text-white font-bold">Haqqımızda</h2>
          </div>
          <div className="flex flex-col gap-4">
            <p>
              “Bizim Sufre” brendi 2009-cü ildə yaradılıb. İllərdir ki,
              məhsullar əl dəymədən, tam avtomatlaşdırılmış şərtlərdə istehsal
              edilir. Fabrik məhsul istehsal edilməsi üçün lazımi beynəlxalq
              standartlara cavab verir və aşağıdakı sertifikatlara sahibdir:
            </p>
            <ul className="flex flex-col gap-4">
              <li>TS-EN-ISO 9001:2008 Keyfiyyət İdarəetmə Sistemi;</li>
              <li>
                TS-EN-ISO 22000: 2005 Qida Təhlükəsizliyi İdarəetmə Sistemi;
              </li>
              <li>
                FSSC 22000 (ISO 22002-1) Qida Təhlükəsizliyi İdarəetmə Sistemi.
              </li>
            </ul>
            <p>
              Fabrikə xidmət göstərən laboratoriya Almaniyanın DAKKS Beynəlxalq
              Akkreditasiya Təşkilatından akkreditə olunmuşdur və ISO 17025:2005
              Laboratoriya Akkreditasiya Yetərlilik Sertifikatına malikdir.
              Brend 2014-cü ildə Türkiyədə keçirilən beynəlxalq “Ambalaj Ay
              Yıldızları 2014” dizayn müsabiqəsində mükafat qazanmışdır. Bu isə
              Azərbaycan məhsulunun beynəlxalq arenada rəqabət gücünü nümayiş
              etdirməkdədir.
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
