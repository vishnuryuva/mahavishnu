// Full-screen background + white card, same markup/classes as the original.
// Put your background image at: public/assets/images/background/login-register.jpg
export default function AuthLayout({ children }) {
  return (
    <div
      className="auth-wrapper d-flex no-block justify-content-center align-items-center"
      style={{
        background:
          'url(/assets/images/background/login-register.jpg) no-repeat center center',
        backgroundSize: 'cover',
      }}
    >
      <div className="auth-box p-4 bg-white rounded">{children}</div>
    </div>
  )
}
