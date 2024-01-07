import { RenderComponentsContainer } from '@/features/playground/components/containers/render-components'

export default async function Playground() {
  return (
    <section className="grid-wrapper main-content">
      <RenderComponentsContainer />
    </section>
  )
}
