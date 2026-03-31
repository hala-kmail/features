import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * عند تغيير الصفحة، يعيد التمرير لأعلى حتى لا يبقى موضع التمرير من الصفحة السابقة
 * (مثلاً بعد النقر على «تعرف على الطبيب» من منتصف الصفحة الرئيسية).
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
