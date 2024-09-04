import { footerProps } from "@lib/types";

export default function Footer(kop:footerProps) {
  return (
    <div className="mt-3">
      <hr />
      <p className="text-secondary text-center">Copyright © {kop.year} {kop.fullName} {kop.studentId}</p>
    </div>
  );
}