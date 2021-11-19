import React, { useState } from "react";

const Dua = () => {
  const [dua, setDua] = useState('Make Your Dua')

  const handleChange = (e) => {
    // console.log(e.target.value);
    setDua(e.target.value);
  };

  const duas = {
    depression: "لاَّ إِلَهَ إِلاَّ أَنتَ سُبْحَانَكَ إِنِّى كُنتُ مِنَ الظَّالِمِينَ - La ilaha illa anta subhanaka inni kuntu minaz zalimin",
    two: "لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِٱللَّٰهِ ٱلْعَلِيِّ ٱلْعَظِيمِ -- La hawla wa la quwwata illa bi Allah al ‘aliyyi al adhim.",
    three: "رَبِّ زِدْنِي عِلْمًا -- Rabbi zidnee ‘ilmaa",
    four: "رَبِّي اِشْرَحْلِي صَدْرِي وَ يَسِّرْلِي أَمْرِي وَاحْلُلْ عُقْدَةً مِّن لِّسَانِي يَفْقَهُوا قَوْلِي -- Rabbi-isyrahli sadri, wa yassir li amri, wahlul ‘uqdatam-min lisaani yafqahu qawli",
    marriage: "رَبَّنَا هَبْ لَنَا مِنْ أَزْواجِنَا وَذُرِّيَّاتِنَا قُرَّةً أَعْيُنِنَا وَجَعَلْنَا للْمُتَّقِينَ إمَامَا -- Rabbana hablana min azwajina wa zurriyatina qurrota ‘ayunina waj'alna lil muttaqina imama.",
    desires: "اللَّهُمَ حَبَّبْ إِلَيْنَا الْإِيمَانَ وَزَيِّنْهُ فِي قُلُوبِنَا، وَكَرِّهْ إِلَيْنَا الْكُفْرَ وَالْفُسُوقَ وَالْعِصْيَانَ، وَاجْعَلْنَا مِنَ الرَّاشِدِينَ -- ALLAHUMMA HABBIB ILAINAL IMAN WA ZAYYINHU FI QULUUBINA WA KARRIH ILAYNAL KUFRO WAL FUSUUQO WAL ‘ISHYAAN, WAJ’ALNA MINAR ROSYIDIN -- O Allah make our faith beloved to us and beautify it in our hearts and make hateful to us disbelief, wickedness and disobedience. And make us of the rightly guided.",
    hardship: "حَسْبِيَ اللَّهُ لآ إلَهَ إلَّا هُوَ، عَلَيْهَ توَكَّلتُ، وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ -- HasbiyAllahu la illaha illa Huwa, ‘alayhi tawakkaltu, wa Huwa Rabbul arshil azim",
    
  };

  return (
    <div className="font">
      <div className="">
      <h1 className="text-5xl my-8 font-bold text-center text-gray-600">How are you feeling?</h1>
        <label className="text-gray-700" htmlFor="dua">
          <select
            onChange={handleChange}
            id="dua"
            className="block font-bold w-3/4 h-12 mx-auto my-12 w-52 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            name="dua"
          >
            <option className="font-medium" value={duas.depression}>Depression</option>
            <option className="font-medium" value={duas.two}>Need Inner Peace</option>
            <option className="font-medium" value={duas.three}>Need to Increase Knowledge</option>
            <option className="font-medium" value={duas.four}>For Success</option>
            <option className="font-medium" value={duas.marriage}>For Successful Marriage</option>
            <option className="font-medium" value={duas.desires}>Negative Desires</option>
            <option className="font-medium" value={duas.hardship}>hardship and Distress</option>
          </select>
          <p className="text-center"></p>
          

          <div className="bg-white dark:bg-gray-800 w-full mx-auto p-8">
    <img src="https://image.freepik.com/free-photo/muslim-boy-learning-how-make-dua-allah_53876-25223.jpg" className="rounded w-60 mb-8 m-auto"/>
    <p className=" text-gray-600 dark:text-white w-full md:w-2/3 m-auto text-center text-lg md:text-3xl">
        <span className="font-bold text-indigo-500">
            “
        </span>
        {`${dua}`}
        <span className="font-bold text-indigo-500">
            ”
        </span>
    </p>
    <div className="flex items-center justify-center mt-8">
    </div>
</div>


        </label>
      </div>
      {/* Style */}
      <style jsx>
        {`
        .font{
          font-family: 'Quicksand', sans-serif;
        }
        `}
      </style>
    </div>
  );
};

export default Dua;
