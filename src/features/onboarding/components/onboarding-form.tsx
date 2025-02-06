/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useState } from "react";
import { TIndustries } from "@/constants/industries";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { onboardingFormSchema, TOnboardingFormSchema } from "@/validations/schemas/onboarding";
import { industryStringFormatter } from "@/lib/utils";
import useFetch from "@/hooks/use-fetch";
import { updateUser } from "../server/action";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { FormField } from "@/components/misc/form-fields";

type OnboardingFormProps = {
  industries: Array<TIndustries>;
};

const OnboardingForm: React.FC<OnboardingFormProps> = ({ industries }) => {
  const [selectedIndustry, setSelectedIndustry] = useState<TIndustries | null>(null);
  const router = useRouter();

  // API Function handler
  const {
    loading: isSubmitting,
    fn: updateUserFn,
    data: updateResult,
    error: submitError,
  } = useFetch(updateUser);

  // Form handling functionalities
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm<TOnboardingFormSchema>({
    resolver: zodResolver(onboardingFormSchema),
  });

  const watchIndustry = watch("industry");

  const onSubmitHandler = async (values: TOnboardingFormSchema) => {
    try {
      const formattedIndustry = industryStringFormatter(values.industry, values.subIndustry);

      await updateUserFn({
        ...values,
        industry: formattedIndustry,
      });
    } catch (error) {
      console.error("Onboarding error:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[80vh] bg-background p-4">
      <Card className="w-full max-w-lg">
        <CardHeader className="space-y-6">
          <CardTitle className="gradient-title text-4xl">Complete Your Profile</CardTitle>
          <CardDescription className="text-base">
            Select your industry to get personalized career insights and recommendations.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmitHandler)} className="flex flex-col gap-4">
            <FormField id="industry" label="Industry" error={errors.industry?.message}>
              <Select
                onValueChange={(value) => {
                  setValue("industry", value);
                  setSelectedIndustry(industries.find((ind) => ind.id === value) || null);
                  setValue("subIndustry", "");
                }}
              >
                <SelectTrigger id="industry">
                  <SelectValue placeholder="Select an industry" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Industries</SelectLabel>
                    {industries.map((ind) => (
                      <SelectItem key={ind.id} value={ind.id}>
                        {ind.name}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </FormField>

            {watchIndustry && (
              <FormField
                id="subIndustry"
                label="Specialization"
                error={errors.subIndustry?.message}
              >
                <Select onValueChange={(value) => setValue("subIndustry", value)}>
                  <SelectTrigger id="subIndustry">
                    <SelectValue placeholder="Select your specialization" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Specializations</SelectLabel>
                      {selectedIndustry?.subIndustries.map((sub) => (
                        <SelectItem key={sub} value={sub}>
                          {sub}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormField>
            )}

            <FormField
              id="experience"
              label="Years of Experience"
              error={errors.experience?.message}
            >
              <Input
                id="experience"
                type="number"
                min="0"
                max="50"
                placeholder="Enter years of experience"
                {...register("experience")}
              />
            </FormField>

            <FormField
              id="skills"
              label="Skills"
              error={errors.skills?.message}
              description="Separate multiple skills with commas"
            >
              <Input
                id="skills"
                placeholder="e.g., Python, JavaScript, Project Management"
                {...register("skills")}
              />
            </FormField>

            <FormField id="bio" label="Professional Bio" error={errors.bio?.message}>
              <Textarea
                id="bio"
                placeholder="Tell us about your professional background..."
                className="h-32 resize-none"
                {...register("bio")}
              />
            </FormField>

            {submitError && (
              <div className="p-3 rounded-md bg-destructive/10 text-destructive text-sm">
                {submitError || "Something went wrong. Please try again."}
              </div>
            )}

            <Button type="submit" className="w-full" disabled={isSubmitting} size="lg">
              {isSubmitting ? (
                <div className="flex items-center justify-center gap-x-2">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>Saving...</span>
                </div>
              ) : (
                "Complete Profile"
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default OnboardingForm;
