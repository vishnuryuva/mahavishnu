import { useEffect, useState } from 'react'
import Preloader from '../components/Preloader'
import AuthLayout from '../components/AuthLayout'
import LoginForm from '../components/LoginForm'
import RecoverForm from '../components/RecoverForm'

export default function LoginPage() {
  const [loading, setLoading] = useState(true)
  const [showRecover, setShowRecover] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 400)
    return () => clearTimeout(t)
  }, [])

  return (
    <div
      className="main-wrapper"
      style={{
        backgroundImage: "url('/assets/images/login-register.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
      }}
    >
      <Preloader hidden={!loading} />
      <AuthLayout>
        {showRecover ? (
          <RecoverForm onBack={() => setShowRecover(false)} />
        ) : (
          <LoginForm onForgot={() => setShowRecover(true)} />
        )}
      </AuthLayout>
    </div>
  )
}
