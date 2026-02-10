import { MapPin } from "lucide-react";

export function StoreMap() {
  return (
    <div className="">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d496114.0486736604!2d100.30345016802033!3d13.725048146151485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d6032280d61f3%3A0x10100b25de24820!2sBangkok!5e0!3m2!1sen!2sth!4v1770709008156!5m2!1sen!2sth" 
        className="w-full h-72 bg-linear-to-br from-gray-50 to-gray-100 rounded-3xl mb-10 border border-gray-200/60 relative overflow-hidden" 
        loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  );
}
