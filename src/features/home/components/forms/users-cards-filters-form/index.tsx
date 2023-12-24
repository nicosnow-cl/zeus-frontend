'use client'

import { Checkbox } from '@/shadcn-components/ui/checkbox'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/shadcn-components/ui/form'
import { Input } from '@/shadcn-components/ui/input'
import { useForm, SubmitHandler } from 'react-hook-form'
import { throttle } from 'lodash'

import { actionFetchAppearances } from '@/common/actions/master-data/fetch-appearances'
import { actionFetchServices } from '@/common/actions/master-data/fetch-services'
import { Combobox } from '@/common/components/ui/primitives/combobox'
import { DEFAULT_VALUES, UsersCardsFilters } from '../../../store/user-cards-filters'
import { LabeledSlider } from '@/common/components/ui/primitives/labeled-slider'
import { masterDataActions, useMasterDataStore } from '@/common/store/mater-data'
import { useEffectOnce } from '@/common/hooks/use-effect-once'
import { useCallback } from 'react'
import { Button } from '@/common/components/primitives/button'

export type UsersCardsFiltersFormProps = {
  containerProps?: Omit<React.ComponentProps<'form'>, 'children'>
  defaultValues?: UsersCardsFilters
  onSubmit?: (data: UsersCardsFilters) => void
  values?: UsersCardsFilters
}

export const UsersCardsFiltersForm = ({
  containerProps,
  onSubmit,
  values,
  defaultValues = { ...DEFAULT_VALUES },
}: UsersCardsFiltersFormProps) => {
  const form = useForm<UsersCardsFilters>({
    defaultValues,
    values,
  })
  const appearances = useMasterDataStore((state) => state.appearances)
  const services = useMasterDataStore((state) => state.services)

  const handleSubmit: SubmitHandler<UsersCardsFilters> = (data) => onSubmit?.(data)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchMasterData = useCallback(
    throttle(async () => {
      const res = await Promise.all([actionFetchAppearances(), actionFetchServices()])

      if (res[0].status === 'success')
        masterDataActions.setAppearances(
          res[0].data.map(({ name, value }) => ({ label: name, value }))
        )

      if (res[1].status === 'success')
        masterDataActions.setServices(
          res[1].data.map(({ name, value }) => ({ label: name, value }))
        )
    }, 100),
    []
  )

  useEffectOnce(() => {
    fetchMasterData()
  })

  return (
    <Form {...form}>
      <form
        {...containerProps}
        className="flex flex-col gap-5"
        onSubmit={form.handleSubmit(handleSubmit)}
      >
        <FormField
          control={form.control}
          name="nameUsername"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input className="rounded-full" placeholder="Nombre / @usuario" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="appearance"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Combobox
                  btnClassName="w-full"
                  onChange={(values) => form.setValue('appearance', values)}
                  options={appearances}
                  triggerPlaceholder="Apariencia"
                  value={field.value}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="services"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Combobox
                  btnClassName="w-full"
                  onChange={(values) => form.setValue('services', values)}
                  options={services}
                  triggerPlaceholder="Servicios"
                  value={field.value}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="gap-4 rounded-md bg-gray-100 p-2 dark:bg-gray-900">
          <FormField
            control={form.control}
            name="withVideo"
            render={({ field }) => (
              <div className=" flex items-center gap-2 space-y-0">
                <FormItem>
                  <FormControl>
                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                  <FormLabel>
                    <p>Con video</p>
                  </FormLabel>
                  <FormMessage />
                </FormItem>
              </div>
            )}
          />

          <FormField
            control={form.control}
            name="hasPromo"
            render={({ field }) => (
              <div className=" flex items-center gap-2 space-y-0">
                <FormItem>
                  <FormControl>
                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                  <FormLabel>
                    <p>En promoción</p>
                  </FormLabel>
                  <FormMessage />
                </FormItem>
              </div>
            )}
          />
        </div>

        <LabeledSlider
          defaultValue={[50000, 500000]}
          onValueCommit={(value) => console.log({ value })}
          min={50000}
          max={500000}
          step={10000}
        />

        <div className="flex justify-between">
          <Button
            type="reset"
            onClick={() =>
              form.reset({
                ...DEFAULT_VALUES,
              })
            }
          >
            Limpiar
          </Button>
          <Button type="submit">Aplicar cambios</Button>
        </div>
      </form>
    </Form>
  )
}
