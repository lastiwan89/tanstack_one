import { Button } from '#/components/selia/button'
import { Checkbox } from '#/components/selia/checkbox'
import { Field, FieldError, FieldLabel } from '#/components/selia/field'
import { Fieldset, FieldsetLegend } from '#/components/selia/fieldset'
import { Input } from '#/components/selia/input'
import { Label } from '#/components/selia/label'
import { Text } from '#/components/selia/text'
import { createFileRoute } from '@tanstack/react-router'
import { FaWhatsapp } from 'react-icons/fa'

export const Route = createFileRoute('/contact')({
  component: Contact,
})

function Contact() {
  return (
    <main className="page-wrap px-4 py-12">
      <section className="island-shell rounded-2xl p-6 sm:p-8">
        <div className="">
          <p className="island-kicker mb-2">Contact</p>
          <h1 className="display-title mb-3 text-4xl font-bold text-(--sea-ink) sm:text-5xl">
            Andalkan kami kalau untuk urusan perjalanan wisata anda.
          </h1>
          <p className="m-0 max-w-3xl text-base leading-8 text-(--sea-ink-soft)">
            TanStack Start gives you type-safe routing, server functions, and
            modern SSR defaults. Use this as a clean foundation, then layer in
            your own routes, styling, and add-ons.
          </p>
        </div>
      </section>
      <section className="island-shell rounded-2xl p-6 sm:p-8 mt-8">
        <div className="w-full max-w-md">
          <Fieldset>
            <FieldsetLegend>Personal Information</FieldsetLegend>
            <Text>
              This information will be used to create your account. You can
              always change this information later.
            </Text>
            <Field>
              <FieldLabel htmlFor="name">Full Name</FieldLabel>
              <Input
                type="text"
                placeholder="Enter your full name"
                id="fullname"
                required
              />
              <FieldError match="valueMissing">
                Your full name is required
              </FieldError>
            </Field>
            <Field>
              <FieldLabel htmlFor="email">Email address</FieldLabel>
              <Input
                type="text"
                placeholder="Enter your email address"
                id="email"
                required
              />
              <FieldError match="valueMissing">Email is required</FieldError>
            </Field>
            <Label>
              <Checkbox />
              <span>
                I agree that Liverpool is the best football club in the world.
              </span>
            </Label>
          </Fieldset>
          <div>
            <Button className="mt-6" variant="primary" type="submit">
              Submit
            </Button>
            <span className="text-lg px-4 font-medium">or</span>
            <Button
              nativeButton={false}
              variant="secondary"
              render={
                <a>
                  <FaWhatsapp />
                  WhatsApp
                </a>
              }
            />
          </div>
        </div>
      </section>
    </main>
  )
}
