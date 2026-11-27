import * as React from "react";
import "./index.css";
import members from "./Member/members.json";
import PageHeader from "./PageHeader.jsx";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const TABS = [
  {
    value: "undergraduates",
    label: "学部生",
    empty: "学部生の登録はありません。",
    affiliation: (m) => `B${m.grade}`,
    sort: (a, b) => b.grade - a.grade,
  },
  {
    value: "masters",
    label: "院生",
    empty: "院生の登録はありません。",
    affiliation: (m) => `M${m.grade}`,
    sort: (a, b) => b.grade - a.grade,
  },
  {
    value: "graduates",
    label: "卒業生",
    empty: "卒業生の登録はありません。",
    affiliation: (m) => (m.graduationYear ? `${m.graduationYear}年度卒` : "卒業生"),
    sort: (a, b) => (b.graduationYear ?? 0) - (a.graduationYear ?? 0),
  },
  {
    value: "advisors",
    label: "顧問",
    empty: "顧問の登録はありません。",
    affiliation: () => "顧問",
    sort: () => 0,
  },
];

function MemberCard({ member, affiliation }) {
  return (
    <div className="flex items-start gap-4 p-4 border rounded-lg shadow-sm bg-white">
      <img
        src={member.icon}
        alt={member.name}
        className="w-28 h-28 rounded-full object-cover shrink-0"
      />
      <div className="flex flex-col">
        <h2 className="text-xl font-bold">{member.name}</h2>
        <p className="text-gray-500 text-sm">
          {affiliation(member)}
          {member.department && <span> / {member.department}</span>}
        </p>
        <p className="text-sm mt-1">{member.description}</p>
      </div>
    </div>
  );
}

function Member() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <PageHeader
        eyebrow="Members"
        title="メンバー紹介"
        description=""
      />

      <Tabs defaultValue="undergraduates" className="w-full">
        <div className="flex justify-center mb-8">
          <TabsList className="flex flex-wrap h-auto gap-1">
            {TABS.map((tab) => (
              <TabsTrigger key={tab.value} value={tab.value}>
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {TABS.map((tab) => {
          const list = [...(members[tab.value] ?? [])].sort(tab.sort);
          return (
            <TabsContent key={tab.value} value={tab.value}>
              {list.length === 0 ? (
                <p className="text-center text-gray-500 py-10">{tab.empty}</p>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {list.map((member, i) => (
                    <MemberCard key={i} member={member} affiliation={tab.affiliation} />
                  ))}
                </div>
              )}
            </TabsContent>
          );
        })}
      </Tabs>
    </div>
  );
}

export default Member;