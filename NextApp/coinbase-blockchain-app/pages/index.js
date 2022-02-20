import styled from 'styled-components'
import { useWeb3 } from '@3rdweb/hooks'

export default function Home() {
  const [address, connectWallet] = useWeb3();
  return (
    <div>
      <button onCall={() => connectWallet('injected')}>
        Connect Wallet
      </button>
    </div>
  )
}
