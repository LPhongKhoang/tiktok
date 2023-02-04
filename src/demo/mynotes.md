# I. Basic
## 1. useContext hook
- Problem: Pass props through many components: CompA -> CompB -> CompC
- Solution:
  - Create context at CompA with `React.createContext : {Provider, Consumer, ...}` 
  - Wrap component A with `Provider` component with `value prop` is state (maybe global state)
  - After that, every nested components of CompA can be use `useContext` (consumer) hook to get `value prop`