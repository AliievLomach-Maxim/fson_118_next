interface Props {
  children: React.ReactNode
  sidebar: React.ReactNode
}
const Layout = ({ children, sidebar }: Props) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <section style={{ minWidth: '150px' }}>{sidebar}</section>
      {children}
    </div>
  )
}

export default Layout
