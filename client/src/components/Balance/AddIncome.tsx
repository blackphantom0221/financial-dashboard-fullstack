import {
  TextInput,
  Textarea,
  NumberInput,
  Button,
  Group,
  Box,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { DatePicker } from "@mantine/dates";
import axios from "axios";

import getSingleUserData from "../../Hooks/getSingleUserData";

function AddIncome() {
  const form = useForm({
    initialValues: {
      name: "",
      amount: 0,
      date: "",
      tag: "Uncategorized",
      comments: "",
    },

    validate: {},
  });
  const userId = localStorage.getItem("userId");
  return (
    <Box sx={{ maxWidth: 300 }} mx="auto">
      <form
        onSubmit={form.onSubmit((values) => {
          axios.post(`http://localhost:5000/api/v1/income/${userId}`, values);
          console.log(values);
          form.reset();
        })}
      >
        <TextInput
          required
          label="Name"
          placeholder="Add a name for this income"
          {...form.getInputProps("name")}
        />
        <NumberInput
          placeholder="Amount"
          label="Add income amount"
          required
          {...form.getInputProps("amount")}
        />
        <DatePicker
          placeholder="Pick date"
          label="Date"
          {...form.getInputProps("date")}
        />
        <TextInput
          label="Tag"
          placeholder="Add a category for this income"
          {...form.getInputProps("tag")}
        />
        <Textarea
          label="Comments"
          placeholder="Add additional comments"
          {...form.getInputProps("comments")}
        />

        <Group position="right" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Box>
  );
}
export default AddIncome;
