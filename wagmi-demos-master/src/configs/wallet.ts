import { http, createConfig } from 'wagmi'
import { mainnet } from 'wagmi/chains'
import { walletConnect, injected } from 'wagmi/connectors'

// a temp project id for testing
const projectId = 'd20062f0065b7c85019c0c995a61f910'

export const WCConnector = walletConnect({ 
  projectId,
  metadata: {
    icons: ['https://example.com/icon.png'],
    name: 'Example', 
    description: 'Example website', 
    url: 'https://example.com', 
  }, })

export const config = createConfig({
  chains: [mainnet],
  transports: {
    [mainnet.id]: http(),
  },
  connectors: [
    WCConnector,
    injected()
  ]
})
