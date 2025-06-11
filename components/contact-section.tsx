"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { MapPin, Phone, Mail, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, { message: "Emri duhet të ketë të paktën 2 karaktere" }),
  email: z.string().email({ message: "Email-i nuk është i vlefshëm" }),
  subject: z.string({ required_error: "Ju lutem zgjidhni një temë" }),
  message: z.string().min(10, { message: "Mesazhi duhet të ketë të paktën 10 karaktere" }),
});

type FormValues = z.infer<typeof formSchema>;

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      console.log("Form data:", data);
      
      // Show success message
      setIsSuccess(true);
      form.reset();
      
      toast({
        title: "Faleminderit!",
        description: "Mesazhi juaj u dërgua me sukses. Do t'ju kontaktojmë brenda 24 orësh.",
        duration: 5000,
      });
      
      // Reset success state after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (error) {
      toast({
        title: "Gabim!",
        description: "Ka ndodhur një gabim. Ju lutem provoni përsëri.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="kontakt" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B2341] dark:text-white mb-4">
            Na Kontaktoni
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Dëshironi një ofertë personale? Na shkruani tani dhe do t'ju kontaktojmë brenda 24 orësh!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-[#0B2341] text-white border-none h-full">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-[#D4AF37]">
                  Informacione Kontakti
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-[#D4AF37] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Adresa</h4>
                      <p className="text-gray-300">
                        Prishtinë, Bregu i Diellit
                        <br />
                        Rruga Dervish Rozhaja, Nr. 43
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-[#D4AF37] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Telefonat</h4>
                      <p className="text-gray-300">
                        +383 49 117 950
                        <br />
                        +383 45 601 556
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-[#D4AF37] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <p className="text-gray-300">info@unionenterier.com</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-[#D4AF37]/20">
                  <h4 className="font-semibold mb-4 text-[#D4AF37]">Orari i Punës</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>E Hënë - E Premte:</span>
                      <span>8:00 - 17:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>E Shtunë:</span>
                      <span>9:00 - 14:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>E Diel:</span>
                      <span>E Mbyllur</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {isSuccess ? (
              <div className="h-full flex items-center justify-center">
                <div className="text-center p-8">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                    Faleminderit!
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
                    Mesazhi juaj u dërgua me sukses.
                    <br />
                    Do t'ju kontaktojmë brenda 24 orësh.
                  </p>
                  <Button 
                    onClick={() => setIsSuccess(false)} 
                    className="bg-[#D4AF37] text-[#0B2341] hover:bg-[#D4AF37]/90"
                  >
                    Dërgo një mesazh tjetër
                  </Button>
                </div>
              </div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Emri</FormLabel>
                        <FormControl>
                          <Input placeholder="Emri juaj" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="Email-i juaj" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tema</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Zgjidhni një temë" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="pyetje_oferta">
                              Pyetje për Oferta
                            </SelectItem>
                            <SelectItem value="bashkepunim">
                              Bashkëpunim Projektesh
                            </SelectItem>
                            <SelectItem value="marketing">
                              Reklamë/Marketing
                            </SelectItem>
                            <SelectItem value="tjeter">Tjetër</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mesazhi</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Shkruani mesazhin tuaj këtu..."
                            rows={5}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full bg-[#D4AF37] text-[#0B2341] hover:bg-[#D4AF37]/90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Duke dërguar..." : "Dërgo"}
                  </Button>
                </form>
              </Form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}