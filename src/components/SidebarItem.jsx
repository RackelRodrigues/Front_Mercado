import { Container } from './Sidebar'

const SidebarItem = ({Icon, Text}) => {
  return (
    <Container>
    {Icon && <Icon size={25} color="#222"/>}
      {Text}
    </Container>
  )
}

export default SidebarItem;