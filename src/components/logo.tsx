import { LockKeyhole } from "lucide-react";

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <span className="font-bold text-xl">MyApp</span>
      <LockKeyhole />
    </div>
  );
}
