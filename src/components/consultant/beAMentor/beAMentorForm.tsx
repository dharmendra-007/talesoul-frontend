'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { beMentorSchema, BeMentorFormType } from '@/validation/beAMentorSchema'
import { indiaStatesCities, states } from '@/constants/stateCityData'

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage
} from '@/components/ui/form'

import { Input } from '@/components/ui/input'
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem
} from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'
import { apiFetch } from '@/lib/api'
import { toast } from 'sonner'

export default function BeAMentorForm () {
  const [selectedState, setSelectedState] = useState('')
  const [loading, setLoading] = useState(false);

  const form = useForm<BeMentorFormType>({
    resolver: zodResolver(beMentorSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      address: '',
      state: '',
      city: '',
      pincode: '',
      fieldOfExpertise: '',
      subField: '',
      yearsOfExperience: '',
      organization: '',
      currentRole: '',
      dob: '',
      image: undefined,
      tags: [],
      bio: "",
      resume: undefined
    }
  })

  const onSubmit = async (values: BeMentorFormType) => {
    try {
      setLoading(true);

      const formData = new FormData();
      
      formData.append("full_name", values.fullName);
      formData.append("email", values.email);
      formData.append("phone", values.phone);
      formData.append("address", values.address);
      formData.append("state", values.state);
      formData.append("city", values.city);
      formData.append("pincode", values.pincode);
      formData.append("dob", values.dob || "");
      formData.append("field_of_expertise", values.fieldOfExpertise);
      formData.append("sub_field", values.subField);
      formData.append(
        "years_of_experience",
        values.yearsOfExperience.replace(/\D/g, "")
      );
      formData.append("organization", values.organization);
      formData.append("current_role", values.currentRole);
      formData.append("bio", values.bio);

      formData.append("tags", JSON.stringify(values.tags));

      if (values.image instanceof File) {
        formData.append("image", values.image);
      }

      if (values.resume instanceof File) {
        formData.append("resume", values.resume);
      }

      await apiFetch("/consultations/mentor/register/", {
        method: "POST",
        body: formData,
      });

      toast.success("Mentor registered successfully 🎉");
    } catch (error: unknown) {
      if (error instanceof Error && "response" in error) {
        const backend = (error as { response?: unknown }).response;

        if (typeof backend === "object" && backend !== null) {
          Object.entries(backend).forEach(([field, val]) => {
            if (Array.isArray(val) && typeof val[0] === "string") {
              form.setError(field as keyof BeMentorFormType, {
                type: "server",
                message: val[0],
              });

              toast.error(`${field}: ${val[0]}`);
            }
          });
        }
      } else if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("Unknown error occurred");
      }
    } finally {
        setLoading(false);
    }
  };



  return (
    <div className='w-full mx-auto pb-10'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
          {/* Personal Information */}
          <div className='p-6 border border-[#EAEAEA] rounded-2xl space-y-6'>
            <h2 className='para1 font-medium'>Personal Information</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 items-start'>
              {/* IMAGE - SPANS TWO ROWS */}
              <div>
                <FormField
                  control={form.control}
                  name='image'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='para2 font-normal'>Profile Image <span className='text-[#E40404]'>*</span></FormLabel>
                      <FormControl>
                        <Input
                          type='file'
                          accept='.jpg,.jpeg,.png,.webp'
                          onChange={e => field.onChange(e.target.files?.[0])}
                          className='para2'
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* FULL NAME */}
              <FormField
                control={form.control}
                name='fullName'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='para2 font-normal'>Full Name <span className='text-[#E40404]'>*</span></FormLabel>
                    <FormControl>
                      <Input placeholder='Enter full name' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* EMAIL */}
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='para2 font-normal'>Email ID <span className='text-[#E40404]'>*</span></FormLabel>
                    <FormControl>
                      <Input placeholder='Enter email' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* PHONE NUMBER */}
              <FormField
                control={form.control}
                name='phone'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='para2 font-normal'>Phone Number <span className='text-[#E40404]'>*</span></FormLabel>
                    <FormControl>
                      <Input placeholder='Enter phone number' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* DATE OF BIRTH */}
              <FormField
                control={form.control}
                name='dob'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='para2 font-normal'>Date of Birth</FormLabel>
                    <FormControl>
                      <Input type='date' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* ADDRESS */}
              <FormField
                control={form.control}
                name='address'
                render={({ field }) => (
                  <FormItem className=''>
                    <FormLabel className='para2 font-normal'>Address <span className='text-[#E40404]'>*</span></FormLabel>
                    <FormControl>
                      <Input placeholder='Enter address' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className='w-full flex justify-between gap-4'>
                {/* STATE */}
                <div className='w-[45%]'>
                  <FormField
                    control={form.control}
                    name='state'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className='para2 font-normal'>State <span className='text-[#E40404]'>*</span></FormLabel>
                        <FormControl>
                          <Select
                            onValueChange={value => {
                              setSelectedState(value)
                              field.onChange(value)
                            }}
                          >
                            <SelectTrigger>
                              {field.value || 'Select state'}
                            </SelectTrigger>
                            <SelectContent>
                              {states.map(st => (
                                <SelectItem key={st} value={st}>
                                  {st}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* CITY */}
                <div className='w-[45%]'>
                  <FormField
                    control={form.control}
                    name='city'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className='para2 font-normal'>City <span className='text-[#E40404]'>*</span></FormLabel>
                        <FormControl>
                          <Select onValueChange={field.onChange}>
                            <SelectTrigger>
                              {field.value || 'Select city'}
                            </SelectTrigger>
                            <SelectContent>
                              {selectedState &&
                                indiaStatesCities[selectedState]?.map(ct => (
                                  <SelectItem key={ct} value={ct}>
                                    {ct}
                                  </SelectItem>
                                ))}
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              {/* PIN CODE */}
              <FormField
                control={form.control}
                name='pincode'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='para2 font-normal'>PIN Code <span className='text-[#E40404]'>*</span></FormLabel>
                    <FormControl>
                      <Input placeholder='Enter PIN code' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* PROFESSIONAL BACKGROUND SECTION */}
          <div className='p-6 border border-[#EAEAEA] rounded-2xl space-y-6'>
            <h2 className='para1 font-medium'>Professional Background</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              {/* Resume */}
            <FormField
                  control={form.control}
                  name='resume'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='para2 font-normal'>Resume <span className='text-[#E40404]'>*</span></FormLabel>
                      <FormControl>
                        <Input
                          type='file'
                          accept='.pdf'
                          onChange={e => field.onChange(e.target.files?.[0])}
                          className='para2'
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

              {/* FIELD OF EXPERTISE */}
              <FormField
                control={form.control}
                name='fieldOfExpertise'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='para2 font-normal'>Field of Expertise <span className='text-[#E40404]'>*</span></FormLabel>
                    <FormControl>
                      <Input
                        placeholder='Select field of expertise'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* SUBFIELD */}
              <FormField
                control={form.control}
                name='subField'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel  className='para2 font-normal'>Sub-field / Specialization <span className='text-[#E40404]'>*</span></FormLabel>
                    <FormControl>
                      <Input placeholder='Enter specialization' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* YEARS OF EXPERIENCE */}
              <FormField
                control={form.control}
                name='yearsOfExperience'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='para2 font-normal'>Years of Experience <span className='text-[#E40404]'>*</span></FormLabel>
                    <FormControl>
                      <Select onValueChange={field.onChange}>
                        <SelectTrigger>
                          {field.value || 'Select experience'}
                        </SelectTrigger>
                        <SelectContent>
                          {Array.from({ length: 10 }, (_, i) => i + 1).map(
                            yr => (
                              <SelectItem key={yr} value={`${yr} years`}>
                                {yr} years
                              </SelectItem>
                            )
                          )}
                          <SelectItem value={`10+ years`}>10+ years</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* CURRENT ROLE */}
              <FormField
                control={form.control}
                name='currentRole'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='para2 font-normal'>Current Role / Occupation <span className='text-[#E40404]'>*</span></FormLabel>
                    <FormControl>
                      <Input placeholder='Enter role' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* ORGANIZATION */}
              <FormField
                control={form.control}
                name='organization'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='para2 font-normal'>Organization / Company / Freelance <span className='text-[#E40404]'>*</span></FormLabel>
                    <FormControl>
                      <Input
                        placeholder='Enter company or freelance'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Bio */}
              <FormField
                control={form.control}
                name='bio'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='para2 font-normal'>Bio <span className='text-[#E40404]'>*</span></FormLabel>
                    <FormControl>
                      <div className="flex flex-col items-end gap-2">
                      <Textarea
                        placeholder='Add a bio...'
                        {...field}
                        className='min-h-28 resize-y'
                      />
                      <span className={cn("text-xs text-muted", field.value.length > 500 && "text-destructive", field.value.length < 10 && "text-destructive")}>{`${field.value.length}/500 characters`}</span>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* TAGS INPUT SECTION */}
              <div className='row-span-2'>
              <FormField
                control={form.control}
                name='tags'
                render={({ field }) => {
                  const tags = field.value || []

                  const addTag = (tag: string) => {
                    tag = tag.trim()
                    if (!tag) return

                    if (tags.length >= 5) return

                    if (!tags.includes(tag)) {
                      form.setValue('tags', [...tags, tag], {
                        shouldValidate: true
                      })
                    }
                  }

                  const removeTag = (tag: string) => {
                    form.setValue(
                      'tags',
                      tags.filter(t => t !== tag),
                      { shouldValidate: true }
                    )
                  }

                  const onKeyDown = (
                    e: React.KeyboardEvent<HTMLInputElement>
                  ) => {
                    if (e.key === 'Enter' || e.key === ',') {
                      e.preventDefault()
                      addTag(e.currentTarget.value)
                      e.currentTarget.value = ''
                    }
                  }

                  return (
                    <FormItem className='space-y-1'>
                      <FormLabel className='para2 font-normal'>Tags<span className='text-[#E40404]'>*</span></FormLabel>
                      <span className='para2'>
                        Press Enter or comma after each tag
                      </span>

                      <div className='border rounded-lg px-3 py-2 flex flex-wrap gap-2 min-h-[3rem] items-center truncate'>
                        {tags.map((tag, idx) => (
                          <div
                            key={idx}
                            className='flex items-center bg-primary rounded-sm px-3 text-sm text-white font-bold !h-[2rem] max-w-[80%]'
                          >
                            <span className='truncate'>
                            {tag}
                            </span>
                            <button
                              type='button'
                              onClick={() => removeTag(tag)}
                              className='ml-2 text-white'
                            >
                              ×
                            </button>
                          </div>
                        ))}

                        {/* input */}
                        {tags.length < 5 && (
                          <input
                            type='text'
                            onKeyDown={onKeyDown}
                            placeholder='Add tag...'
                            className='flex-1 w-full outline-none bg-transparent p-1'
                            maxLength={30}
                          />
                        )}
                      </div>

                      <div className='para2'>
                        {5 - tags.length} tags remaining
                      </div>

                      {/* REMOVE ALL BUTTON */}
                      {tags.length > 0 && (
                        <button
                          type='button'
                          className='text-sm text-primary hover:underline'
                          onClick={() =>
                            form.setValue('tags', [], { shouldValidate: true })
                          }
                        >
                          Remove All
                        </button>
                      )}

                      <FormMessage />
                    </FormItem>
                  )
                }}
              />
              </div>
            </div>
          </div>

          {/* SUBMIT BUTTON */}
          <div className='w-full flex justify-end'>
            <Button type='submit' variant='primaryButton'>
              {
                loading ? "Registering..." : "Submit"
              }
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}
