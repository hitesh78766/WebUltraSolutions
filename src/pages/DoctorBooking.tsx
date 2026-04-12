import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Stethoscope, Search, UserCheck, CalendarDays, ClipboardCheck, LayoutDashboard, ShieldAlert, ChevronRight, Activity, HeartPulse } from 'lucide-react';
import ThreeNeuralStorm from '../components/ThreeNeuralStorm';

export default function DoctorBooking() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="bg-white min-h-screen font-secondary overflow-x-hidden text-slate-600">
      
      {/* Hero Section - Strict WebDesign Sync */}
      <section className="relative min-h-[280px] lg:min-h-[350px] flex items-center justify-center overflow-hidden border-b border-orange-100/50 pt-[80px]">
        <div className="absolute inset-0 z-0">
          <ThreeNeuralStorm color="#FF6600" bgOpacity={0} />
          <div className="absolute inset-0 bg-white/50 backdrop-blur-[1px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl lg:text-5xl font-display font-extrabold text-slate-950 uppercase leading-[1.1] tracking-tight mb-4"
          >
            {(() => {
              const words = "DOCTOR PATIENT BOOKING.".split(" ");
              return words.map((word, i) => (
                <span key={i} className={`inline-block mr-3 ${i === 0 ? "text-slate-950" : "text-[#FF6600]"}`}>
                  {word}
                </span>
              ));
            })()}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-xs lg:text-sm font-semibold max-w-2xl mx-auto leading-relaxed border-t border-orange-100 pt-5"
          >
            Get online booking scheduling at your convenience with your doctor & clinic.
          </motion.p>
        </div>
      </section>

      {/* High-Density Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          
          {/* Top Grid: Core Definition & Preview */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-6">
                <h2 className="text-2xl lg:text-3xl font-display font-extrabold uppercase tracking-tight leading-tight">
                  <span className="text-slate-950">ONLINE</span> <span className="text-[#FF6600]">appointment scheduling software for doctors, physicians patient, laboratory and clinics.</span>
                </h2>
                <p className="text-base lg:text-lg font-semibold text-slate-500 italic border-l-4 border-[#FF6600] pl-6 py-1">
                  Get online booking scheduling at your convenience with your doctor & clinic.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                   <div className="w-6 h-[2px] bg-[#FF6600]" />
                   <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#FF6600]">System Features</h3>
                </div>
                <h4 className="text-xl lg:text-2xl font-display font-extrabold uppercase tracking-tight">
                  <span className="text-slate-950">FEATURES:</span>
                </h4>
                <p className="text-base lg:text-lg font-semibold text-slate-500 leading-relaxed max-w-2xl">
                  Our wide range of features offers you complete flexibility so that you can create your appointment schedule to perfectly fit your requirements.
                </p>
              </div>

              {/* Module: Search */}
              <div className="space-y-4 pt-4 border-t border-slate-50">
                <h3 className="text-xl lg:text-2xl font-display font-extrabold uppercase tracking-tight">
                  <span className="text-slate-950">SEARCH</span> <span className="text-[#FF6600]">module:</span>
                </h3>
                <p className="text-base lg:text-lg font-semibold leading-relaxed text-slate-500">
                  Search module is for searching the available doctor; Patient can search separately based on specialty, location, available date and with particular health insurance for available doctors. Search system is very easy and user friendly where you can search accordingly to your requirement.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-md overflow-hidden border border-slate-100 shadow-2xl p-2 bg-slate-50">
                <img src="/doctor_booking_dashboard.png" alt="Search UI" className="w-full h-auto rounded-sm opacity-90" />
              </div>
            </div>
          </div>

          {/* Bottom Grid: Parallel Feature Streams */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-10 border-t border-slate-100">
            {/* Patient Features */}
            <div className="space-y-6 p-8 bg-slate-50/50 rounded-md border border-slate-100 group hover:bg-white hover:shadow-2xl transition-all duration-500">
              <h3 className="text-xl lg:text-2xl font-display font-extrabold uppercase pb-4 border-b border-orange-200">
                <span className="text-slate-950">PATIENT</span> <span className="text-[#FF6600]">FEATURES</span>
              </h3>
              <ul className="space-y-4">
                {[
                  "Easy and user friendly Sign up, Sign In and Account Password Recovery",
                  "Book and cancel appointments anytime as they want.",
                  "Can edit/update or delete the booking details.",
                  "Write review about doctors and can select doctors according to other user feedback.",
                  "Can access all previous check-in details and medical past appointments."
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-start group/item">
                    <span className="text-[#FF6600] font-black leading-none">★</span>
                    <span className="text-xs font-semibold uppercase tracking-widest text-slate-600 group-hover/item:text-slate-900 transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Doctor Features */}
            <div className="space-y-6 p-8 bg-slate-50/50 rounded-md border border-slate-100 group hover:bg-white hover:shadow-2xl transition-all duration-500">
              <h3 className="text-xl lg:text-2xl font-display font-extrabold uppercase pb-4 border-b border-orange-200">
                <span className="text-slate-950">DOCTOR</span> <span className="text-[#FF6600]">FEATURES</span>
              </h3>
              <ul className="space-y-4">
                {[
                  "Easy and user friendly Sign up, Sign In and Account Password Recovery",
                  "Manage appointments and view upcoming schedule.",
                  "Can update and edit profiles can.",
                  "Can schedule their availability dates and the day they are on vacation.",
                  "Generate Reports - You can find out number of actual visits and reports of patients edited by them"
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-start group/item">
                    <span className="text-[#FF6600] font-black leading-none">★</span>
                    <span className="text-xs font-semibold uppercase tracking-widest text-slate-600 group-hover/item:text-slate-900 transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Institutional Grid: Final Sections (Simpler White Aesthetic) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
            {[
              { title: "Appointment booking", desc: "This module is for scheduling an appointment with the doctors you require, here your medical history and date of appointment is to be entered. Only the registered users can login and can schedule a doctor's appointment." },
              { title: "Appointment management", desc: "This module is for the doctor's to approve and cancel the requested appointments by patients and they can also list out the days they are available." },
              { title: "Admin Feature", desc: "where you can manage all details from here ." }
            ].map((section, i) => (
              <div key={i} className="p-8 rounded-md border border-slate-100 bg-white shadow-sm group hover:border-orange-200 transition-all duration-300">
                <h3 className="text-sm lg:text-base font-display font-extrabold uppercase tracking-widest mb-6">
                  <span className="text-slate-950">{section.title.split(' ')[0].toUpperCase()}</span> <span className="text-[#FF6600]">{section.title.split(' ').slice(1).join(' ').toUpperCase()}</span>
                </h3>
                <p className="text-[10px] font-semibold uppercase leading-relaxed tracking-widest text-slate-500">
                  {section.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}

