// main.js
// 문의 폼 제출 시 이메일 알림을 보내려면 서버 또는 외부 서비스 연동 필요
// 예시: EmailJS, Google Apps Script 등 사용 가능
// 아래 코드는 프론트엔드에서 동작하는 예시(실제 이메일 전송은 서버 필요)
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  alert('문의가 접수되었습니다! (실제 이메일 알림은 서버 연동 필요)');
  // 실제 이메일 전송은 EmailJS 등 외부 서비스 연동 필요
}); 