import type { Plugin } from 'vite'

function VitePluginReactInspector(): Plugin {
  return {
    name: 'unplugin-hot-export',
    apply: 'serve',
  }
}

export default VitePluginReactInspector
