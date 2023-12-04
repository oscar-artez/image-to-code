'use client'

import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export const Form = ({ transformUrlToCode }: { transformUrlToCode: (url: string) => void }) => {
  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={(evt) => {
        evt.preventDefault()
        const form = evt.currentTarget as HTMLFormElement
        const url = form.elements.namedItem('url') as HTMLInputElement

        transformUrlToCode(url.value)
      }}
    >
      <Label htmlFor="url">Introduce tu URL de la imagen:</Label>
      <Input id="url" type="url" placeholder="https://tu-screenshot/image.jpg"></Input>
      <Button>Generar código de la imagen</Button>
    </form>
  )
}
