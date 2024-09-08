import { Classroom } from "@prisma/client";
import { CreateClassroomData } from "../../../repositories/prisma/prisma-classroom-repository/types";

export interface CreateClassroomUseCasePayload extends CreateClassroomData {}

export interface CreateClassroomUseCaseReturn {
  classroom: Classroom
}