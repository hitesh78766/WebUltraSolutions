import { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Users,
  LayoutGrid,
  Calendar,
  BookOpen,
  ClipboardCheck,
  FileBarChart,
  ClipboardList,
  Upload,
  Library,
  Truck,
  Bed,
  Wallet,
  CreditCard,
  MessageSquare,
  Globe,
  Radio,
  UserCog,
  Calculator,
  Bell,
  HardHat,
  Monitor,
  Zap,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Image as ImageIcon,
  UserCircle,
  Activity,
  Cpu
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ThreeTechnicalLattice from '../components/ThreeTechnicalLattice';

gsap.registerPlugin(ScrollTrigger);

const schoolPillars = [
  {
    category: "Academic Architecture",
    modules: [
      { id: "01", title: "Student Admission System", desc: "Fully functional and automated admission form for student enrollment. Enroll students to a specific class for a certain session.", bullets: ["Admission Forms", "Class Selection"] },
      { id: "02", title: "Bulk Import of Students", desc: "Import as many students as you want using csv file integration to sync databases instantly.", bullets: ["CSV Support", "Mass Sync"] },
      { id: "03", title: "Class Management (Multi-Section)", desc: "Add sections to a class. Ability to assign teacher for a section. Multiple sections per class.", bullets: ["Section Control", "Teacher Assignment"] },
      { id: "04", title: "Subject Management", desc: "Add subjects for each class separately. Assign a teacher for a specific subject module.", bullets: ["Class Specifics", "Specialization"] },
      { id: "05", title: "Class Routine & Schedule", desc: "Manage class timetables section-wise. Change timetable dynamically when required.", bullets: ["Timetable Control", "Live Sync"] },
      { id: "06", title: "Student Promotion Logic", desc: "Promote students to new sessions. Filter who gets promoted. Preview results while moving.", bullets: ["Session Logic", "Result Validation"] },
      { id: "07", title: "Daily Attendance Engine", desc: "Take attendance of students daily. Keep track if students are absent with real-time logs.", bullets: ["Daily Logs", "Absence Tracking"] },
      { id: "08", title: "Attendance Reporting", desc: "Well-defined attendance reports for all students for a certain class/month. Print-ready.", bullets: ["Monthly Insights", "Print Support"] },
      { id: "09", title: "Exam Lifecycle Management", desc: "Specify exam dates. Add or remove any exam anytime you need from the central hub.", bullets: ["Date Control", "Exam Cycles"] },
      { id: "10", title: "Marks & Evaluation", desc: "Evaluate or put exam marks for each student subject-wise. Compare students' marks and print marksheets.", bullets: ["Subject-wise Entry", "Comparison Tools"] },
      { id: "11", title: "Tabulation Sheet Engine", desc: "Get reports of marks of all students for specific classes and exams. Direct printing options.", bullets: ["Grand Reports", "Batch Printing"] },
      { id: "12", title: "Question Papers Hub", desc: "Ability to upload question papers for students within the secure academic portal.", bullets: ["Repository", "Class-wise Upload"] },
      { id: "13", title: "Study Materials Central", desc: "Upload study materials class-wise. Students can download materials anytime they need.", bullets: ["Resource Hub", "Admin Approval"] },
      { id: "14", title: "Academic Library", desc: "Organize books class-wise. Manage book issuance and track librarians' inventory logs.", bullets: ["Book Inventory", "Issue History"] }
    ]
  },
  {
    category: "Financial Management",
    modules: [
      { id: "15", title: "Fees & Billing Management", desc: "Create single/mass invoices. Take multiple payments under single invoice. Online/Manual support.", bullets: ["Mass Invoicing", "Partial Payments"] },
      { id: "16", title: "Online Payment Gateways", desc: "integrated payment systems: Take student fees via PayPal or Payumoney seamlessly.", bullets: ["PayPal Support", "Payumoney Sync"] },
      { id: "17", title: "Institutional Accounting", desc: "Create payment invoices. Create mass invoices for particular classes. Track history.", bullets: ["Audit Logs", "Batch Billing"] },
      { id: "18", title: "Expense Tracking", desc: "Add school expenses. Keep track of operational costs with separate categories.", bullets: ["Category Control", "Cost Analysis"] }
    ]
  },
  {
    category: "Operational Core",
    modules: [
      { id: "19", title: "Transportation Management", desc: "Add transport for your school. Attach students to technical transport services.", bullets: ["Route Management", "Service Attach"] },
      { id: "20", title: "Dormitories & Housing", desc: "Manage school dorms and assign students to specific dorm rooms and sessions.", bullets: ["Room Allocation", "Occupancy Stats"] },
      { id: "21", title: "Teacher Management", desc: "Add/edit/delete teachers. Assign teachers to specific classes, sections, or subjects.", bullets: ["Staff Registry", "Conflict Check"] },
      { id: "22", title: "Academic Session Handling", desc: "Keep school records year-wise. Select academic sessions and view legacy data.", bullets: ["Historical Records", "Session Selector"] },
      { id: "23", title: "Parents Section", desc: "Manage parent profiles. Link parents to multiple children within the system.", bullets: ["Parent-Student Link", "Multi-child Support"] },
      { id: "24", title: "Staff Role Management", desc: "Separate user accounts for librarians, accountants, and administrators.", bullets: ["Role-based Access", "Dedicated Dashboard"] }
    ]
  },
  {
    category: "Communication & Web",
    modules: [
      { id: "25", title: "SMS & Gateway Integration", desc: "MSG91, Twilio and Clickatell APIs are integrated for global broadcast alerts.", bullets: ["API Integration", "Broadcast Alerts"] },
      { id: "26", title: "Private Messaging", desc: "Internal messaging system. Email notifications for every private message received.", bullets: ["User to User", "Auto Notifications"] },
      { id: "27", title: "Universal Noticeboard", desc: "Global announcements for all users. Calendar integration for dashboards.", bullets: ["Global Alerts", "Calendar Sync"] },
      { id: "28", title: "Language & RTL Support", desc: "Supports over 20 languages. Real-time translation and RTL support available.", bullets: ["RTL Layouts", "Custom Dictionary"] },
      { id: "29", title: "Frontend School Website", desc: "Public portal reflecting noticeboard, event lists, galleries, and teacher profiles.", bullets: ["Public Portal", "Live Sync"] }
    ]
  }
];

export default function SchoolManagementERP() {
  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => ScrollTrigger.refresh(), 500);
  }, []);

  return (
    <div className="pt-[80px] bg-white min-h-screen font-secondary overflow-hidden">
      {/* PEHRA HERO: CINEMATIC & COMPACT */}
      <div className="relative min-h-[220px] lg:min-h-[280px] bg-transparent flex items-center justify-center overflow-hidden border-b border-slate-100">
        <ThreeTechnicalLattice />

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-1.5 px-4 py-1 bg-slate-900 rounded shadow-2xl"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#FF6600] animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white">System Protocol v11.8</span>
          </motion.div>

          <h1 className="text-3xl lg:text-5xl font-display font-extrabold text-slate-900 tracking-tight leading-[1.1] uppercase max-w-4xl mx-auto">
            {(() => {
              const title = "School Management System Erp.";
              return title.split(" ").map((word, wordIdx) => (
                <span key={wordIdx} className="inline-block mr-4">
                  {word.split("").map((char, charIdx) => (
                    <motion.span
                      key={`${wordIdx}-${charIdx}`}
                      initial={{ opacity: 0, y: -50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        type: "spring", stiffness: 200, damping: 10,
                        delay: 0.2 + (wordIdx * 0.1) + (charIdx * 0.02)
                      }}
                      className={`inline-block ${word === "Erp." ? "text-[#FF6600]" : ""}`}
                    >
                      {char}
                    </motion.span>
                  ))}
                </span>
              ));
            })()}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-slate-600 text-[11px] lg:text-xs font-semibold max-w-2xl mx-auto leading-relaxed uppercase tracking-[0.4em]"
          >
            Fully functional and automated admission form for student enrollment.
          </motion.p>
        </div>
      </div>

      {/* PEHRA PROTOCOL LAYOUT: HIGH-DENSITY POINTS */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-8 lg:px-24">
        <div className="space-y-32">
          {schoolPillars.map((pillar, pi) => (
            <div key={pi} className="space-y-16">
              {/* Category Header */}
              <div className="flex items-center gap-8 group">
                <div className="h-[2px] w-20 bg-slate-100 group-hover:w-32 group-hover:bg-[#FF6600] transition-all duration-700" />
                <h2 className="text-2xl lg:text-3xl font-display font-black text-slate-950 uppercase tracking-tight italic">
                  {pillar.category.split(" ").map((w, wi) => (
                    <span key={wi} className={wi === 1 ? "text-[#FF6600]" : ""}>{w} </span>
                  ))}
                </h2>
              </div>

              {/* Pehra Points Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
                {pillar.modules.map((mod, mi) => (
                  <motion.div
                    key={mi}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: mi * 0.05 }}
                    className="group relative flex gap-8"
                  >
                    {/* Pehra Index */}
                    <span className="text-4xl font-display font-black text-[#FF6600]/10 group-hover:text-[#FF6600]/20 transition-colors pointer-events-none select-none">
                      {mod.id}
                    </span>

                    <div className="space-y-4 mt-2">
                      <h3 className={`text-lg lg:text-xl font-display font-extrabold uppercase leading-none group-hover:translate-x-2 transition-transform duration-500 ${(Math.floor(mi / 2) + (mi % 2)) % 2 === 0 ? "text-slate-950" : "text-[#FF6600]"}`}>
                        <span className="text-slate-950">{mod.title.split(" ")[0]} </span>
                        {mod.title.split(" ").slice(1).join(" ")}
                      </h3>
                      <p className="text-sm lg:text-base font-semibold text-slate-500 leading-relaxed max-w-md">
                        {mod.desc}
                      </p>
                      <ul className="flex flex-wrap gap-x-4 gap-y-2 pt-2">
                        {mod.bullets.map((b, bi) => (
                          <li key={bi} className="flex items-center gap-2">
                            <div className="w-1 h-1 rounded-full bg-[#FF6600]" />
                            <span className="text-[10px] lg:text-[11px] font-black uppercase tracking-widest text-slate-400 group-hover:text-slate-900 transition-colors">{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Structural Decoration - NOW VISIBLE BY DEFAULT */}
                    <div className="absolute -left-4 top-0 w-[1.5px] h-full bg-[#FF6600]/40 group-hover:bg-[#FF6600] transition-all duration-700" />
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
