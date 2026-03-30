export type Doctor = {
  id: number;
  name: string;
  specialty: string;
  experience: string;
  image: string;
  bio: string;
  certificates: string[];
  practiceScope?: string[];
};

export const doctors: Doctor[] = [
  {
    id: 1,
    name: "د. أحمد سعيدان",
    specialty: "استشاري الاستعاضة السنية، زراعة الأسنان واستعاضة الوجه والفكين",
    experience: "١٥ سنة خبرة",
    image: "/drAhmad.jpeg",
    bio: "خبير في الاستعاضة السنية وزراعة الأسنان واستعاضة الوجه والفكين.",
    certificates: [
      "بكالوريوس طب الأسنان: جامعة الملك سعود",
      "شهادة الاختصاص والماجستير: جامعة انديانا في الولايات المتحدة الأمريكية",
      "زمالة زراعة الأسنان: جامعة ميريلاند",
      "زمالة استعاضة الوجه والفكين: مستشفى مايو كلينيك",
      "البورد الأمريكي والكندي في الاستعاضة السنية"
    ],
    practiceScope: [
      "تيجان الأسنان",
      "جسور الأسنان",
      "زراعة الأسنان",
      "تجميل الأسنان",
      "الأطقم المتحركة للأسنان"
    ]
  }
];

export function getDoctorById(id: number): Doctor | undefined {
  return doctors.find((d) => d.id === id);
}
