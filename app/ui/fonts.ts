// 폰트 적용하기
import { Inter, Lusitana } from "next/font/google";

// layout.tsx의 body에 적용
export const inter = Inter({ subsets: ["latin"] });
// /app/page.tsx의 <p>태그에 적용
export const lusitana = Lusitana({ 
    weight: ['400', '700'] ,
    subsets: ["latin"]
});
