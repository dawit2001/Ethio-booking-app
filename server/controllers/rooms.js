import express from "express";
import Room from "../models/Room.js";

const router = express.Router();

export const createRoom = async (req, res) => {
    try {
        const room = await Room.create(req.body);
        res.status(201).json(room);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const getAllRooms = async (req, res) => {
    try {
        const rooms = await Room.find();
        res.status(200).json(rooms);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getRoomById = async (req, res) => {
    try {
        const room = await Room.findById(req.params.id);
        if (!room) {
            return res.status(404).json({ error: "Room not found" });
        }
        res.status(200).json(room);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updateRoomById = async (req, res) => {
    try {
        const room = await Room.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        if (!room) {
            return res.status(404).json({ error: "Room not found" });
        }
        res.status(200).json(room);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const deleteRoomById = async (req, res) => {
    try {
        const room = await Room.findByIdAndDelete(req.params.id);
        if (!room) {
            return res.status(404).json({ error: "Room not found" });
        }
        res.status(204).send("room has been deleted");
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export default router;
