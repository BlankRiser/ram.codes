import {
  Input,
  Slider,
  SliderClose,
  SliderContent,
  SliderDescription,
  SliderFooter,
  SliderHeader,
  SliderTitle,
  SliderTrigger,
} from "../ui";
import { Button } from "../ui/button";

export const ContactMe = () => {
  return (
    <div className="grid grid-cols-2 gap-2">
      <Slider>
        <SliderTrigger asChild>
          <Button variant={"default"}>Contact Me</Button>
        </SliderTrigger>
        <SliderContent side={"right"} className="sm:max-w-3xl">
          <SliderHeader>
            <SliderTitle className="font-space-grotesk text-lg font-semibold">
              Contact Me
            </SliderTitle>
            <SliderDescription>
              Please fill the form below to contact me.
            </SliderDescription>
          </SliderHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="name" className="text-right">
                Name
              </label>
              <Input id="name" value="Pedro Duarte" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="username" className="text-right">
                Username
              </label>
              <Input id="username" value="@peduarte" className="col-span-3" />
            </div>
          </div>
          <SliderFooter>
            <SliderClose asChild>
              <Button type="submit">Contact Me</Button>
            </SliderClose>
          </SliderFooter>
        </SliderContent>
      </Slider>
    </div>
  );
};
