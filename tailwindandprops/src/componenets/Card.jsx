
function Card({name,skill,skillsf,skills2,skills3}) {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">

      <div className="w-full max-w-sm bg-white rounded-2xl shadow-xl overflow-hidden">

        {/* Cover */}
        <div className="h-28 bg-gradient-to-r from-indigo-500 to-purple-600"></div>

        {/* Profile Content */}
        <div className="px-6 pb-6 text-center">

          <img
            src="https://i.pravatar.cc/150?img=12"
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-white mx-auto -mt-12 relative object-cover"
          />

          <h1 className="text-2xl font-bold text-slate-800 mt-3">
          {name}
          </h1>

          <p className="text-indigo-600 font-medium mt-1">
            {skill}
          </p>

          <p className="text-slate-500 text-sm mt-3 leading-relaxed">
            B.Tech CSE student passionate about web development,
            problem solving and building useful projects.
          </p>

          {/* Skills */}
          <div className="flex flex-wrap justify-center gap-2 mt-5">
            <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm">
      {skillsf}
            </span>

            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
          {    skills2}
            </span>

            <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">
              {skills3}
            </span>
          </div>

          {/* Stats */}
          <div className="flex justify-around border-y border-slate-200 py-4 mt-6">
            <div>
              <h2 className="font-bold text-xl text-slate-800">20+</h2>
              <p className="text-sm text-slate-500">Projects</p>
            </div>

            <div>
              <h2 className="font-bold text-xl text-slate-800">800+</h2>
              <p className="text-sm text-slate-500">DSA Solved</p>
            </div>

            <div>
              <h2 className="font-bold text-xl text-slate-800">5+</h2>
              <p className="text-sm text-slate-500">Skills</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 mt-5">
            <button className="flex-1 bg-indigo-600 text-white py-2.5 rounded-lg font-medium hover:bg-indigo-700 transition">
              Follow
            </button>

            <button className="flex-1 border border-slate-300 text-slate-700 py-2.5 rounded-lg font-medium hover:bg-slate-100 transition">
              Message
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Card;
