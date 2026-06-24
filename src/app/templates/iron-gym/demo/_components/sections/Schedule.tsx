"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { scheduleData, bookingConfig } from "../../_data/mockData";
import { X, Calendar as CalendarIcon, Clock, User } from "lucide-react";

export default function Schedule() {
  const [activeDay, setActiveDay] = useState(scheduleData[0].day);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedClass, setSelectedClass] = useState<any>(null);

  const activeSchedule = scheduleData.find(d => d.day === activeDay);

  const handleBook = (cls: any) => {
    if (bookingConfig.useExternalLink) {
      window.open(bookingConfig.baseUrl, "_blank");
    } else {
      setSelectedClass(cls);
      setIsModalOpen(true);
    }
  };

  return (
    <section id="schedule" className="py-24 bg-black relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-[family-name:var(--font-oswald)] font-black text-white uppercase mb-4">Class Schedule</h2>
          <p className="text-white/50 max-w-lg mx-auto">Plan your attack. Book your spot.</p>
        </motion.div>

        {/* 7-Day Tabs */}
        <div className="flex justify-center flex-wrap gap-2 md:gap-4 mb-12">
          {scheduleData.map((data) => (
            <button
              key={data.day}
              onClick={() => setActiveDay(data.day)}
              className={`px-6 py-3 font-bold uppercase tracking-widest transition-all duration-300 ${
                activeDay === data.day 
                  ? "bg-[var(--accent)] text-black" 
                  : "bg-white/5 text-white/50 hover:bg-white/10 hover:text-white"
              }`}
            >
              {data.day}
            </button>
          ))}
        </div>

        {/* Schedule List */}
        <div className="max-w-4xl mx-auto min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDay}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-4"
            >
              {activeSchedule?.classes.map((cls) => (
                <div 
                  key={cls.id}
                  className="flex flex-col md:flex-row justify-between items-start md:items-center p-6 bg-[var(--card-bg)] border border-white/5 hover:border-[var(--accent)]/50 transition-colors gap-4"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-[var(--accent)] font-bold tracking-widest">{cls.time}</span>
                      <span className="px-2 py-1 bg-white/10 text-white/50 text-xs uppercase">{cls.slots} Spots</span>
                    </div>
                    <h3 className="text-2xl font-[family-name:var(--font-oswald)] font-bold text-white uppercase">{cls.name}</h3>
                    <p className="text-white/50 flex items-center gap-2 mt-2">
                      <User size={16} /> Coach {cls.trainer}
                    </p>
                  </div>
                  <button 
                    onClick={() => handleBook(cls)}
                    className="w-full md:w-auto px-8 py-3 border border-[var(--accent)] text-[var(--accent)] font-bold uppercase tracking-widest hover:bg-[var(--accent)] hover:text-black transition-colors"
                  >
                    Book Now
                  </button>
                </div>
              ))}
              {activeSchedule?.classes.length === 0 && (
                <div className="text-center py-12 text-white/50">
                  No classes scheduled for this day.
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Booking Modal */}
      <AnimatePresence>
        {isModalOpen && selectedClass && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-[var(--card-bg)] border border-white/10 w-full max-w-md p-8 relative"
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
              
              <h3 className="text-3xl font-[family-name:var(--font-oswald)] font-black text-white uppercase mb-2">Confirm Booking</h3>
              <p className="text-white/50 mb-8">You are about to book the following class via {bookingConfig.provider}.</p>
              
              <div className="space-y-4 mb-8 bg-black/50 p-6 border border-white/5">
                <div className="flex items-center gap-3 text-white">
                  <CalendarIcon size={20} className="text-[var(--accent)]" />
                  <span className="font-bold">{activeDay} - {selectedClass.name}</span>
                </div>
                <div className="flex items-center gap-3 text-white/70">
                  <Clock size={20} className="text-[var(--accent)]" />
                  <span>{selectedClass.time}</span>
                </div>
                <div className="flex items-center gap-3 text-white/70">
                  <User size={20} className="text-[var(--accent)]" />
                  <span>{selectedClass.trainer}</span>
                </div>
              </div>

              <button 
                onClick={() => {
                  window.open(bookingConfig.baseUrl, "_blank");
                  setIsModalOpen(false);
                }}
                className="w-full py-4 bg-[var(--accent)] text-black font-bold uppercase tracking-widest hover:bg-white transition-colors"
              >
                Continue to App
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
