import NavBar from './components/NavBar';
import { useConnection } from '@arweave-wallet-kit/react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

function App() {
  const { connected } = useConnection();

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              {/* Blog Header */}
              <header className="mb-12 text-center">
                <h1 className="text-4xl font-bold mb-2">My Blog Title</h1>
                <p className="text-lg text-gray-300">
                  Insights, stories and updates on Arweave and decentralized tech.
                </p>
              </header>

              {/* Wallet Connection Status (bağlıysa göster) */}
              {connected && (
                <div className="mb-8 text-center">
                  <p className="text-xl text-green-400">Connected Successfully! 🎉</p>
                </div>
              )}

              {/* Blog Posts Grid */}
              <section className="grid gap-8 grid-cols-1 md:grid-cols-2">
                {/* Blog Post 1 */}
                <article className="bg-gray-800 rounded-lg shadow-md overflow-hidden">
                  <div className="p-6">
                    <h2 className="text-2xl font-semibold mb-2">Mirror Makale Başlığı 1</h2>
                    <p className="text-gray-400 mb-4">
                      Kısa bir özet: Makalenin içeriği hakkında bilgi...
                    </p>
                    <a
                      href="https://mirror.xyz/vevivo.eth/vk5HYiNZNRiiSM_hP5dWUSwnex9Yrxm3-TMzolKWS1k?referrerAddress=0xa2aE6f0B2E8CC472c66905622ba244E58cB9813D"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline"
                    >
                      Makaleyi Oku
                    </a>
                  </div>
                </article>

                {/* Blog Post 2 */}
                <article className="bg-gray-800 rounded-lg shadow-md overflow-hidden">
                  <div className="p-6">
                    <h2 className="text-2xl font-semibold mb-2">Mirror Makale Başlığı 2</h2>
                    <p className="text-gray-400 mb-4">
                      Kısa bir özet: Makalenin içeriği hakkında bilgi...
                    </p>
                    <a
                      href="https://mirror.xyz/vevivo.eth/QnXB0Abst0kfKdAMgIBZFdJTkt3jJNfNZmsOiCBY2OU?referrerAddress=0xa2aE6f0B2E8CC472c66905622ba244E58cB9813D"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline"
                    >
                      Makaleyi Oku
                    </a>
                  </div>
                </article>

                {/* Blog Post 3 */}
                <article className="bg-gray-800 rounded-lg shadow-md overflow-hidden">
                  <div className="p-6">
                    <h2 className="text-2xl font-semibold mb-2">Mirror Makale Başlığı 3</h2>
                    <p className="text-gray-400 mb-4">
                      Kısa bir özet: Makalenin içeriği hakkında bilgi...
                    </p>
                    <a
                      href="https://mirror.xyz/vevivo.eth/1JX8Nq4lYpo5Mdm9GlMsdlcJ3qnrqear4bpLkRlTROY?referrerAddress=0xa2aE6f0B2E8CC472c66905622ba244E58cB9813D"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline"
                    >
                      Makaleyi Oku
                    </a>
                  </div>
                </article>

                {/* Blog Post 4 */}
                <article className="bg-gray-800 rounded-lg shadow-md overflow-hidden">
                  <div className="p-6">
                    <h2 className="text-2xl font-semibold mb-2">Mirror Makale Başlığı 4</h2>
                    <p className="text-gray-400 mb-4">
                      Kısa bir özet: Makalenin içeriği hakkında bilgi...
                    </p>
                    <a
                      href="https://mirror.xyz/vevivo.eth/epAdf9liOpME9_s4nMFUyE4WrBolbcWo2RLXPSXdL28?referrerAddress=0xa2aE6f0B2E8CC472c66905622ba244E58cB9813D"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline"
                    >
                      Makaleyi Oku
                    </a>
                  </div>
                </article>

                {/* Blog Post 5 */}
                <article className="bg-gray-800 rounded-lg shadow-md overflow-hidden">
                  <div className="p-6">
                    <h2 className="text-2xl font-semibold mb-2">Mirror Makale Başlığı 5</h2>
                    <p className="text-gray-400 mb-4">
                      Kısa bir özet: Makalenin içeriği hakkında bilgi...
                    </p>
                    <a
                      href="https://mirror.xyz/vevivo.eth/gqhz4q9TsI4PjKCzYgsfmbJjsAUZ7Ji3xVd9mC-BYFs?referrerAddress=0xa2aE6f0B2E8CC472c66905622ba244E58cB9813D"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline"
                    >
                      Makaleyi Oku
                    </a>
                  </div>
                </article>
              </section>
            </main>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
