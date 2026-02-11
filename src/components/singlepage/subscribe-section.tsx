import { Button } from '@/components/ui/button'
import {
  FieldDescription,
  FieldGroup,
  FieldLegend,
  FieldSet,
} from '@/components/ui/field'
import { Input } from '@/components/ui/input'

export default function SubscribeSection() {
  return (
    <div className="flex items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-32 p-8 items-center">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl text-gray-200 font-bold">
            Subscribe our newsletter
          </h2>
          <p className="text-gray-400">
            Subscribe to our newsletter and be the first to receive insights,
            updates, and expert tips on optimizing your plan of happy travel
            journey.
          </p>
        </div>
        <div className="w-full max-w-md">
          <form action="">
            <FieldGroup className="flex">
              <FieldSet>
                <FieldLegend className="text-gray-200">
                  Stay up to date
                </FieldLegend>
                <FieldGroup>
                  <Input type="email" placeholder="Enter your email" required />
                  <FieldDescription>
                    By subscribing you agree to our <span>Privacy Policy</span>
                  </FieldDescription>
                </FieldGroup>
              </FieldSet>
              <Button variant="outline" type="submit">
                Subscribe
              </Button>
            </FieldGroup>
          </form>
        </div>
      </div>
    </div>
  )
}
