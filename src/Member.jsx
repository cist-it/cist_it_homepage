import * as React from "react"
import "./index.css"
import members from "./Member/members.json";

function Member() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-center mb-8">メンバー紹介</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {members.currentStudents.slice().sort((a, b) => b.grade - a.grade).map((member, index) => (
                <div key={index} className="flex items-start gap-4 p-4 border rounded-lg shadow-sm bg-white">
                    <img
                        src={member.icon} alt={member.name}
                        className="w-28 h-28 rounded-full object-cover shrink-0"
                    />
                    <div className="flex flex-col">
                        <h2 className="text-xl font-bold">{member.name}</h2>
                        <p className="text-gray-500 text-sm">{member.grade}年生{member.department && <span> / {member.department}</span>}</p>
                        <p className="text-sm mt-1">{member.description}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Member;